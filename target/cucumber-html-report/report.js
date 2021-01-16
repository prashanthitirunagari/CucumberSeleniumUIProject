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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"#\" class\u003d\"\" tooltip\u003d\"\" onclick\u003d\"javascript:$CityDropDown.SetSelectedValue(this);return false;\" text\u003d\"Hyderabad (HYD)\" value\u003d\"HYD\"\u003e...\u003c/a\u003e is not clickable at point (76, 12). Other element would receive the click: \u003ca class\u003d\"spicejet_logo\" href\u003d\"Default.aspx\" title\u003d\"SpiceJet\"\u003e\u003c/a\u003e\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027DESKTOP-LIT0RJ3\u0027, ip: \u0027192.168.1.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64066}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e14214ae0a4677bed8918105e60074b4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:123)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:238)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat StepDefinitions.SpiceJetHomePageSD.user_selects_from_city_as_something_and_to_city_as_something(SpiceJetHomePageSD.java:39)\r\n\tat ✽.User selects From city as \"DEL\" and To city as \"HYD\"(file:src/test/java/FeatureFiles/SpiceJetHomePage.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User selects Depart date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_depart_date_as_current_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select number of Passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_select_number_of_passengers_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects currency \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_selects_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "SpiceJetHomePageSD.user_clicks_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the page which asks for GST details should display",
  "keyword": "Then "
});
formatter.match({
  "location": "SpiceJetHomePageSD.the_page_which_asks_for_gst_details_should_display()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat Utils.SeleniumHelper.ObjectText(SeleniumHelper.java:151)\r\n\tat StepDefinitions.SpiceJetHomePageSD.the_page_which_asks_for_gst_details_should_display(SpiceJetHomePageSD.java:45)\r\n\tat ✽.the page which asks for GST details should display(file:src/test/java/FeatureFiles/SpiceJetHomePage.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027DESKTOP-LIT0RJ3\u0027, ip: \u0027192.168.1.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64126}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: efcdfa98999509224a51e307597f9842\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:123)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:562)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:294)\r\n\tat Hooks.GeneralHooks.tearDown(GeneralHooks.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
});