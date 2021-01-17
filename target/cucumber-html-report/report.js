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
formatter.step({
  "name": "User is in the jQuery landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site()"
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
      "name": "@JQuerySanity"
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
  "error_message": "java.lang.AssertionError: Object Droppable Not Found\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat Utils.SeleniumHelper.GetWebElement(SeleniumHelper.java:90)\r\n\tat Utils.SeleniumHelper.ObjectLink(SeleniumHelper.java:97)\r\n\tat StepDefinitions.JQueryDroppableSD.user_should_clicks_on_Droppable_link(JQueryDroppableSD.java:16)\r\n\tat ✽.User should clicks on Droppable link(file:src/test/java/FeatureFiles/JQueryDroppablePage.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User switches to respective frame",
  "keyword": "And "
});
formatter.match({
  "location": "JQueryDroppableSD.user_switches_to_respective_frame()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tries to move the drag me object to drop me object",
  "keyword": "And "
});
formatter.match({
  "location": "JQueryDroppableSD.tries_to_move_the_drag_me_object_to_drop_me_object()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be should be successfully drag \u0026 drop the object",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryDroppableSD.user_should_be_should_be_successfully_drag_drop_the_object()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
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
formatter.step({
  "name": "User is in the jQuery landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site()"
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
      "name": "@JQuerySanity"
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat StepDefinitions.JQueryStepDef.the_page_title_should_be(JQueryStepDef.java:31)\r\n\tat ✽.the page title should be \"jQuery UI\"(file:src/test/java/FeatureFiles/JQueyHomePage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating existence of menus in Jqueryui home Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@JQuerySanity"
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
formatter.step({
  "name": "User is in the jQuery landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site()"
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
      "name": "@JQuerySanity"
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
  "error_message": "java.lang.AssertionError: Object Demos Not Found\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat Utils.SeleniumHelper.GetWebElement(SeleniumHelper.java:90)\r\n\tat Utils.SeleniumHelper.ObjectLink(SeleniumHelper.java:97)\r\n\tat StepDefinitions.JQueryStepDef.user_should_see_list_of_menus(JQueryStepDef.java:37)\r\n\tat ✽.User should see list of \"Demos\"(file:src/test/java/FeatureFiles/JQueyHomePage.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027DESKTOP-LIT0RJ3\u0027, ip: \u0027192.168.1.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57236}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b712e53bcb179cf992ecf7a4a0b68214\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:123)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:562)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:294)\r\n\tat Hooks.GeneralHooks.tearDown(GeneralHooks.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validating clicking on a menu navigate to respective menu details screen",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@JQuerySanity"
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
formatter.step({
  "name": "User is in the jQuery landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "JQueryStepDef.user_access_jqueryui_site()"
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
      "name": "@JQuerySanity"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using partial link text\u003dDemos\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027DESKTOP-LIT0RJ3\u0027, ip: \u0027192.168.1.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:335)\r\n\tat org.openqa.selenium.By$ByPartialLinkText.findElement(By.java:267)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:312)\r\n\tat StepDefinitions.JQueryStepDef.user_should_clicks_on(JQueryStepDef.java:43)\r\n\tat ✽.User should clicks on \"Demos\"(file:src/test/java/FeatureFiles/JQueyHomePage.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "menu screen \"jQuery UI Demos\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "JQueryStepDef.menu_screen_should_display(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027DESKTOP-LIT0RJ3\u0027, ip: \u0027192.168.1.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ed318c040b59c74391ac37e58b7400c9\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:123)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:562)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:294)\r\n\tat Hooks.GeneralHooks.tearDown(GeneralHooks.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
});