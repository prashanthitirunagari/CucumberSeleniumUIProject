package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;

import Utils.SeleniumDriver;
import Utils.SeleniumHelper;
import Utils.SeleniumHelper.Locator;
import WebPages.PageLocators.SpiceJetHomePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SpiceJetHomePageSD extends SeleniumDriver{

	@Given("^User on Spicejet landing page$")
    public void user_on_spicejet_landing_page()  {
		if(SeleniumHelper.GetPageTitle().contains("SpiceJet - Flight Booking for Domestic")) 
			Assert.assertTrue("Title of the page is as expected", true);
		else
			Assert.assertFalse(true);
    }

    
    @When("^User selects \"([^\"]*)\" radio button option$")
    public void user_selects_something_radio_button_option(String direction) {
    	if(direction.equals("oneway"))
    		SeleniumHelper.ObjectRadio(SpiceJetHomePage.oneWayRadio, Locator.Id,  "SelectValue", "");
    	else if(direction.equals("twoway"))
    		SeleniumHelper.ObjectRadio(SpiceJetHomePage.roundTripRadio, Locator.Id,  "SelectValue", "");
    }
    
    @And("^User selects From city as \"([^\"]*)\" and To city as \"([^\"]*)\"$")
    public void user_selects_from_city_as_something_and_to_city_as_something(String fromCity, String toCity){
    	SeleniumHelper.ObjectButton(SpiceJetHomePage.fromDropdown, Locator.Id, "Click");
		driver.findElement(By.xpath("//a[@value='"+fromCity+"']")).click();
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.toDropdown, Locator.Id, "Click");
	    driver.findElement(By.xpath("//a[@value='"+toCity+"']")).click();
	    
    }

    @Then("^the page which asks for GST details should display$")
    public void the_page_which_asks_for_gst_details_should_display()  {
        Assert.assertTrue(SeleniumHelper.ObjectText(SpiceJetHomePage.chooseADepflight, Locator.XPath, "ReadValue", ""));
    }

    @And("^User selects Depart date as current date$")
    public void user_selects_depart_date_as_current_date()  {
    	SeleniumHelper.ObjectButton(SpiceJetHomePage.currentDate, Locator.CssSelector, "Click");
    }

    @And("^user select number of Passengers \"([^\"]*)\"$")
    public void user_select_number_of_passengers_something(String passengercount)  {
    	SeleniumHelper.ObjectButton(SpiceJetHomePage.passengers, Locator.Id, "Click");
	    SeleniumHelper.ObjectDropdown(SpiceJetHomePage.adult, Locator.Id, "SelectValue", passengercount);
	    }

    @And("^user selects currency \"([^\"]*)\"$")
    public void user_selects_something(String currency)  {
    	SeleniumHelper.ObjectDropdown(SpiceJetHomePage.currency, Locator.Id, "SelectValue", currency);
	}

    @And("^User clicks on Search button$")
    public void user_clicks_on_search_button()  {
    	SeleniumHelper.ObjectButton(SpiceJetHomePage.search, Locator.Id, "Click");
    }

}
