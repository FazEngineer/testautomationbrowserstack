package browserstack;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserStackTestDataProvider {

    public WebDriver driver;

    public static String USERNAME = "fazshah1";
    public static String ACCESSKEY = "EXwzGn8tzopbHLdueBxT";
    public static String URL = "https://" + USERNAME + ":" + ACCESSKEY + "@hub.browserstack.com/wd/hub";


    @Test (dataProvider = "browserStackTestData")
    public void openSTM(Platform platform, String browserName, String browserVersion) throws MalformedURLException {

        DesiredCapabilities capability = new DesiredCapabilities();
        capability.setPlatform(platform);
        capability.setBrowserName(browserName);
        capability.setVersion(browserVersion);
        capability.setCapability("browserstack.debug", false);

        URL browserStackURL = new URL(URL);
        //System.setProperty("webdriver.chrome.driver", "../testautomationbrowserstack/chromedriver");
        WebDriver driver = new RemoteWebDriver(browserStackURL, capability);

        driver.get("http://www.softwaretestingmaterial.com");
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.SECONDS);
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://www.softwaretestingmaterial.com/";
        Assert.assertEquals(actualURL, expectedURL, "Actual and Expected are not the same");
        driver.quit();
    }

    @DataProvider (name = "browserStackTestData", parallel = true)
    public java.lang.Object[][] getData(){
        java.lang.Object[][] testData = new Object[][] {
                {Platform.MAC, "chrome", "62.0"},
                {Platform.WIN8, "chrome", "62.0"},
                {Platform.WINDOWS, "firefox", "57"},
        };

        return testData;
    }
}



