$(document).ready(function() {
  setInterval(function() {
    findAndUpdate();
  }, 3000);

  function tabUpdate() {
    var activeTab = $("#nav-tab").find("a.active");
    var activeTabIndex = activeTab.index()

    switch (activeTabIndex) {
      case 0:
        LoadData0();
        break;
      case 1:
        LoadData0();
        break;
      case 2:
        LoadData0();
        break;
      case 3:
        LoadData0();
        break;
      default:
        // default case
    }
    // alert(str);

    // updated as soon as a user switches tab, then
    $("#nav-tabs").on("click", "li", function() {
      setTimeout(function() {
        findAndUpdate();
      }, 30);
      // setting timeout is required as the tab should first change
    });
  }
);
