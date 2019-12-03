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

}
