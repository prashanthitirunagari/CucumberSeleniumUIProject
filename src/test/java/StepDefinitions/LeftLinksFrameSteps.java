package StepDefinitions;

import java.io.IOException;

import org.junit.Assert;

import Utils.SeleniumDriver;
import Utils.SeleniumHelper;
import WebPages.PageLocators.CommonPageLocators;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import Utils.SeleniumHelper.Locator;

public class LeftLinksFrameSteps extends SeleniumDriver{

	@Given("^I am on the nigels landing Page of maths Website$")
	public void i_am_on_the_nigels_Page_of_maths_Website(){
		if(SeleniumHelper.GetPageTitle().contains("HTML Learning Package")){
			Assert.assertTrue("actual and expected are same", true);
		}else{
			Assert.assertFalse(true);
		}
	}

	@When("^I click on the link \"([^\"]*)\"$")
	public void i_click_on_the_link(String linkName) throws Throwable {
		SeleniumHelper.switchToFrame("leftFrame");
		SeleniumHelper.ObjectLink(linkName, Locator.PartialLinkText, "Click", "");
		driver.switchTo().defaultContent();
	}
	
	@When("^I click on the link Contents$")
	public void i_click_on_the_link_Contents() {
		SeleniumHelper.switchToFrame("leftFrame");
		SeleniumHelper.ObjectLink("Background", Locator.PartialLinkText, "Click", "");
		driver.switchTo().defaultContent();
	}


	@Then("^I should see list of Contents in the right frames$")
	public void i_should_see_list_of_Contents_in_the_right_frames(){
		SeleniumHelper.switchToFrame("mainFrame");
		//SeleniumHelper.ObjectText(CommonPageLocators.BGTitle,Locator.XPath,"ReadValue","");
		/*if (gbReturnValue.equals("HTML Background")){
			Assert.assertTrue("actual and expected are same", true);
		}else {
			Assert.assertFalse(true);
		}*/
	   }
	

	@Then("^the page title should be HTML Learning Package$")
	public void the_page_title_should_be_HTML_Learning_Package(){
		if(SeleniumHelper.GetPageTitle().contains("HTML Learning Package")){
			Assert.assertTrue("actual and expected are same", true);
		}else{
			Assert.assertFalse(true);
		}
	}

	
	
	@Then("^I should see list of \"([^\"]*)\" in the right frames$")
	public void i_should_see_list_of_in_the_right_frames(String headerName) throws Throwable {
		String element="";
		gbReturnValue="";
		SeleniumHelper.switchToFrame("mainFrame");
		if(headerName.toLowerCase().equals("contents")){
			element = CommonPageLocators.contents;
			}else if(headerName.toLowerCase().equals("html background")){
			element = CommonPageLocators.BGTitle;
		}else if(headerName.toLowerCase().equals("beginner's guide")){
			element = CommonPageLocators.guide;
		}else if(headerName.toLowerCase().equals("html tags")){
			 element = CommonPageLocators.htmlTags;
		}else if(headerName.toLowerCase().equals("tables")){
			 element = CommonPageLocators.tables;
		}
		SeleniumHelper.ObjectText(element,Locator.XPath,"ReadValue","");
		System.out.println("ActualText="+gbReturnValue);
		System.out.println("Expected Text="+headerName);
		if (gbReturnValue.trim().equals(headerName)){
			Assert.assertTrue("actual and expected are same", true);
		}else {
			Assert.assertFalse(true);
		
	   }
		driver.switchTo().defaultContent();

	}

}

