package steps;

import browserstack.BrowserStackTestDataProvider;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class Hook extends BrowserStackTestDataProvider {

    private BrowserStackTestDataProvider base;

    public Hook(BrowserStackTestDataProvider base) {
        this.base = base;}

    @Before
    public void InitialiseTest() {
        System.out.println("Opening the browser : Chrome");
        System.setProperty("webdriver.chrome.driver", "../testautomationbrowserstack/chromedriver");
        base.driver = new ChromeDriver();
        base.driver.manage().window().maximize();

    }




}
