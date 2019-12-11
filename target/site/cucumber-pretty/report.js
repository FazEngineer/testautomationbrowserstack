$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HappyPathEndToEnd.feature");
formatter.feature({
  "line": 1,
  "name": "HappyPathEndToEndFeature",
  "description": "This feature deals with carrying out a search for news on bbc",
  "id": "happypathendtoendfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21604448132,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Users searches news on bbc",
  "description": "",
  "id": "happypathendtoendfeature;users-searches-news-on-bbc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"https://www.bbc.co.uk\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select news",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see news page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bbc.co.uk",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iNavigateToSite(String)"
});fformatter.result({
  "duration": 11656555754,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectNews()"
});fformatter.result({
  "duration": 30216367497,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //*[@id\u003d\u0027bbccookies-continue-button\u0027]\u0027 (tried for 10 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat pages.HomePage.enterSearch(HomePage.java:29)\n\tat steps.MyStepdefs.iSelectNews(MyStepdefs.java:32)\n\tat ✽.And I select news(HappyPathEndToEnd.feature:6)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\u0027bbccookies-continue-button\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Fazs-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:881:8965:d8b7:efe6%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: firefox, browserVersion: 69.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190827005903, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 5752, moz:profile: C:\\Windows\\proxy\\rust_mozpr..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 2249529e12c8fd8af431e7a124e...}\nSession ID: 2249529e12c8fd8af431e7a124ee4719634a8f88\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027bbccookies-continue-button\u0027]}\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat pages.HomePage.enterSearch(HomePage.java:29)\n\tat steps.MyStepdefs.iSelectNews(MyStepdefs.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\n\tat org.testng.TestNG.run(TestNG.java:1017)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeNewsPage()"
});
formatter.result({
  "status": "skipped"
});
});a:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeNewsPage()"
});
formatter.result({
  "status": "skipped"
});
});