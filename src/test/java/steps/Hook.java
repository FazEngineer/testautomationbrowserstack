package steps;

import browserstack.BrowserStackTwo;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class Hook extends BrowserStackTwo {

    private BrowserStackTwo base;

    public Hook(BrowserStackTwo base) {
        this.base = base;}

    @Before
    public void InitialiseTest() throws MalformedURLException {
        System.out.println("Opening the browser : Chrome");
        //System.setProperty("webdriver.chrome.driver", "../testautomationbrowserstack/chromedriver");
        base.BrowserStackTwoMethod().manage().window().maximize();

    }




}
