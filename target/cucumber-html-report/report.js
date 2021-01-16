$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFiles/SpiceJetHomePage.feature");
formatter.feature({
  "name": "One Way Flight Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "One Way Flight Search with Depart Date as current Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SpiceJetSanity"
    }
  ]
});
formatter.step({
  "name": "User on Spicejet landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects \"\u003cdirection\u003e\" radio button option",
  "keyword": "When "
});
formatter.step({
  "name": "User selects From city as \"\u003cfromCity\u003e\" and To city as \"\u003ctoCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects Depart date as current date",
  "keyword": "And "
});
formatter.step({
  "name": "user select number of Passengers \"\u003cpassengercount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects currency \"\u003ccurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "name": "the page which asks for GST details should display",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "direction",
        "fromCity",
        "toCity",
        "passengercount",
        "currency"
      ]
    },
    {
      "cells": [
        "oneway",
        "DEL",
        "HYD",
        "1",
        "GBP"
      ]
    },
    {
      "cells": [
        "twoway",
        "HYD",
        "DEL",
        "2",
        "GBP"
      ]
    }
  ]
});
formatter.scenario({
  "name": "One Way Flight Search with Depart Date as current Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SpiceJetSanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on Spicejet landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_on_spicejet_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"oneway\" radio button option",
  "keyword": "When "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_something_radio_button_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects From city as \"DEL\" and To city as \"HYD\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_from_city_as_something_and_to_city_as_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Depart date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_depart_date_as_current_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select number of Passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_select_number_of_passengers_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects currency \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_clicks_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page which asks for GST details should display",
  "keyword": "Then "
});
formatter.match({
  "location": "SpiceJetHomePageSD.the_page_which_asks_for_gst_details_should_display()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat Utils.SeleniumHelper.ObjectText(SeleniumHelper.java:151)\r\n\tat StepDefinitions.SpiceJetHomePageSD.the_page_which_asks_for_gst_details_should_display(SpiceJetHomePageSD.java:45)\r\n\tat ✽.the page which asks for GST details should display(file:src/test/java/FeatureFiles/SpiceJetHomePage.feature:14)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "One Way Flight Search with Depart Date as current Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SpiceJetSanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on Spicejet landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_on_spicejet_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"twoway\" radio button option",
  "keyword": "When "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_something_radio_button_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects From city as \"HYD\" and To city as \"DEL\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_from_city_as_something_and_to_city_as_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Depart date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_depart_date_as_current_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select number of Passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_select_number_of_passengers_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects currency \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_clicks_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page which asks for GST details should display",
  "keyword": "Then "
});
formatter.match({
  "location": "SpiceJetHomePageSD.the_page_which_asks_for_gst_details_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});