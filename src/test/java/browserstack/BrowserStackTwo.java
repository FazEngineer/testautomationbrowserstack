package browserstack;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class BrowserStackTwo {

    public RemoteWebDriver BrowserStackTwoMethod() throws MalformedURLException {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("browserstack.local", System.getProperty("bs_local_testing"));
        caps.setCapability("browser", System.getProperty("bs_browser"));
        caps.setCapability("browser_version", System.getProperty("bs_browser_version"));
        caps.setCapability("os", System.getProperty("bs_os"));
        caps.setCapability("os_version", System.getProperty("bs_os_version"));
        caps.setCapability("browserstack.selenium_version", System.getProperty("bs_selenium_version"));
        RemoteWebDriver driver = new RemoteWebDriver(new URL("https://fazshah2:BxRzebQGVPn1Bxthi8hT@hub-cloud.browserstack.com/wd/hub"), caps);
        return driver;
    }
}
