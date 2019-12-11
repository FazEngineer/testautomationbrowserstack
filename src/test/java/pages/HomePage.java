package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

    public HomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }



    @FindBy(how = How.XPATH, using = "//*[@id='bbccookies-continue-button']")
    public WebElement cookieButton;

    @FindBy(how = How.XPATH, using = "//*[@class='orb-nav-news']/a[@href=\"https://www.bbc.co.uk/news\"]")
    public WebElement newsButton;

    public void enterSearch(WebDriver driver) {

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(cookieButton));
        cookieButton.click();

        wait.until(ExpectedConditions.visibilityOf(newsButton));
        newsButton.click();
    }


}
