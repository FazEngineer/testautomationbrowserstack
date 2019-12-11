package steps;

import browserstack.BrowserStackTwo;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import pages.HomePage;
import pages.NewsPage;

import java.net.MalformedURLException;


public class MyStepdefs extends BrowserStackTwo{

    //private BrowserStackTwo base;

    //public MyStepdefs(BrowserStackTwo base) {
     //   this.base = base;
    //}


    @Given("^I navigate to \"([^\"]*)\" site$")
    public void iNavigateToSite(String url) throws MalformedURLException {
        BrowserStackTwoMethod().navigate().to(url);

    }

    @And("^I select news$")
    public void iSelectNews() throws MalformedURLException {
        HomePage one = new HomePage(BrowserStackTwoMethod());
        one.enterSearch(BrowserStackTwoMethod());
        
    }

    @Then("^I should see news page$")
    public void iShouldSeeNewsPage() throws MalformedURLException {
        NewsPage two = new NewsPage(BrowserStackTwoMethod());
        two.searchDisplayed();
    }
}
