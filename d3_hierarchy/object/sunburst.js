var svg = d3.select("body").append("svg:svg")
    .attr("width", 932)
    .attr("height", 600)
    .style("width", "100%")
    .style("height", "auto")
    .style("font", "10px sans-serif");

var width = +svg.attr("width");
var radius = width / 6;

partition = function partition(data) {
    var root = d3.hierarchy(data).sum(function (d) {
        return d.value;
    }).sort(function (a, b) {
        return b.value - a.value;
    });
    return d3.partition().size([2 * Math.PI, root.height + 1])(root);
};

var arc = d3.arc().startAngle(function (d) {
    return d.x0;
}).endAngle(function (d) {
    return d.x1;
}).padAngle(function (d) {
    return Math.min((d.x1 - d.x0) / 2, 0.005);
}).padRadius(radius * 1.5).innerRadius(function (d) {
    return d.y0 * radius;
}).outerRadius(function (d) {
    return Math.max(d.y0 * radius, d.y1 * radius - 1);
});


d3.json("data/flare.json", function(data) {

    var root = partition(data);
    var color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1))
    var format = d3.format(",d")

    root.each(function (d) {
        return d.current = d;
    });

    var g = svg.append("g")
        .attr("transform", "translate(".concat(width / 2, ",").concat(width / 2, ")"));

    var path = g.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path").attr("fill", function (d) {
            while (d.depth > 1) {
                d = d.parent;
            }
            return color(d.data.name);
        }).attr("fill-opacity", function (d) {
            return arcVisible(d.current) ? d.children ? 0.6 : 0.4 : 0;
        }).attr("d", function (d) {
            return arc(d.current);
        });

    path.filter(function (d) {
        return d.children;
    }).style("cursor", "pointer").on("click", clicked);

    path.append("title").text(function (d) {
        return "".concat(d.ancestors().map(function (d) {
            return d.data.name;
        }).reverse().join("/"), "\n").concat(format(d.value));
    });

    var label = g.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .join("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", function (d) {
            return +labelVisible(d.current);
            }).attr("transform", function (d) {
            return labelTransform(d.current);
        }).text(function (d) {
            return d.data.name;
        });

    var parent = g.append("circle").datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

    function clicked(p) {
        parent.datum(p.parent || root);
        root.each(function (d) {
            return d.target = {
                x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                y0: Math.max(0, d.y0 - p.depth),
                y1: Math.max(0, d.y1 - p.depth)
            };
        });
        var t = g.transition().duration(750); // Transition the data on all arcs, even the ones that aren’t visible,
        // so that if this transition is interrupted, entering arcs will start
        // the next transition from the desired position.

        path.transition(t).tween("data", function (d) {
            var i = d3.interpolate(d.current, d.target);
            return function (t) {
                return d.current = i(t);
            };
        }).filter(function (d) {
            return +this.getAttribute("fill-opacity") || arcVisible(d.target);
        }).attr("fill-opacity", function (d) {
            return arcVisible(d.target) ? d.children ? 0.6 : 0.4 : 0;
        }).attrTween("d", function (d) {
            return function () {
                return arc(d.current);
            };
        });
        label.filter(function (d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t).attr("fill-opacity", function (d) {
            return +labelVisible(d.target);
        }).attrTween("transform", function (d) {
            return function () {
                return labelTransform(d.current);
            };
        });
    }
    
    svg.node();
});

function arcVisible(d) {
    return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
}

function labelVisible(d) {
    return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
}

function labelTransform(d) {
    var x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
    var y = (d.y0 + d.y1) / 2 * radius;
    return "rotate(".concat(x - 90, ") translate(").concat(y, ",0) rotate(").concat(x < 180 ? 0 : 180, ")");
}
