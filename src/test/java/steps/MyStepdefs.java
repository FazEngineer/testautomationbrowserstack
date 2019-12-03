package steps;

import browserstack.BrowserStackTestDataProvider;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import pages.HomePage;
import pages.NewsPage;

import java.net.MalformedURLException;


public class MyStepdefs extends BrowserStackTestDataProvider{

    private BrowserStackTestDataProvider base;

    public MyStepdefs(BrowserStackTestDataProvider base) {
        this.base = base;
    }


    @Given("^I navigate to \"([^\"]*)\" site$")
    public void iNavigateToSite(String url){

       base.driver.navigate().to(url);


    }

    @And("^I select news$")
    public void iSelectNews() {
        HomePage one = new HomePage(base.driver);
        one.enterSearch(base.driver);
        
    }

    @Then("^I should see news page$")
    public void iShouldSeeNewsPage() {
        NewsPage two = new NewsPage(base.driver);
        two.searchDisplayed();
    }
}
