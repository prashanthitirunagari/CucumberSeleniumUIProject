$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFiles/JQueryDroppablePage.feature");
formatter.feature({
  "name": "Test to validate Drag \u0026 Drop with frames in Droppable Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Drag \u0026 Drop in a Frame",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on Droppable link",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryDroppableSD.user_should_clicks_on_Droppable_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User switches to respective frame",
  "keyword": "And "
});
formatter.match({
  "location": "JQueryDroppableSD.user_switches_to_respective_frame()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tries to move the drag me object to drop me object",
  "keyword": "And "
});
formatter.match({
  "location": "JQueryDroppableSD.tries_to_move_the_drag_me_object_to_drop_me_object()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be should be successfully drag \u0026 drop the object",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryDroppableSD.user_should_be_should_be_successfully_drag_drop_the_object()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/FeatureFiles/JQueyHomePage.feature");
formatter.feature({
  "name": "Test to validate Menus in the JqueryUi home page",
  "description": "  In order to validate that \n  the jqueryui page is working\n  Doing the Acceptance Testing",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of the page title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "the page title should be \"jQuery UI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"\u003cmenus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "menus"
      ]
    },
    {
      "cells": [
        "Demos"
      ]
    },
    {
      "cells": [
        "Download"
      ]
    },
    {
      "cells": [
        "API Documentation"
      ]
    },
    {
      "cells": [
        "Themes"
      ]
    },
    {
      "cells": [
        "Development"
      ]
    },
    {
      "cells": [
        "Support"
      ]
    },
    {
      "cells": [
        "Blog"
      ]
    },
    {
      "cells": [
        "About"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"Demos\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"Download\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"API Documentation\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"Themes\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"Development\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"Support\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"Blog\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should see list of \"About\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.user_should_see_list_of_menus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"\u003cmenus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "menu screen \"\u003cheaderName\u003e\" should display",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "menus",
        "headerName"
      ]
    },
    {
      "cells": [
        "Demos",
        "jQuery UI Demos"
      ]
    },
    {
      "cells": [
        "Download",
        "Download Builder"
      ]
    },
    {
      "cells": [
        "API Documentation",
        "jQuery UI 1.12 API Documentation"
      ]
    },
    {
      "cells": [
        "Themes",
        "ThemeRoller"
      ]
    },
    {
      "cells": [
        "Development",
        "Development Center"
      ]
    },
    {
      "cells": [
        "Support",
        "Support Center"
      ]
    },
    {
      "cells": [
        "About",
        "About jQuery UI"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"Demos\"",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryStepDef.user_should_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu screen \"jQuery UI Demos\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"Download\"",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryStepDef.user_should_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu screen \"Download Builder\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"API Documentation\"",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryStepDef.user_should_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu screen \"jQuery UI 1.12 API Documentation\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"Themes\"",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryStepDef.user_should_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu screen \"ThemeRoller\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"Development\"",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryStepDef.user_should_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu screen \"Development Center\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"Support\"",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryStepDef.user_should_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu screen \"Support Center\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat Utils.SeleniumHelper.ObjectText(SeleniumHelper.java:146)\r\n\tat StepDefinitions.JQueryStepDef.menu_screen_should_display(JQueryStepDef.java:61)\r\n\tat ✽.menu screen \"Support Center\" should display(file:src/test/java/FeatureFiles/JQueyHomePage.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User access jqueryui \"http://jqueryui.com\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should clicks on \"About\"",
  "keyword": "When "
});
formatter.match({
  "location": "JQueryStepDef.user_should_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu screen \"About jQuery UI\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});