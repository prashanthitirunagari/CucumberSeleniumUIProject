package Utils;


import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.testautomationguru.ocular.Ocular;
import com.testautomationguru.ocular.comparator.OcularResult;

public class SeleniumHelper extends SeleniumDriver{

	

	public enum Locator
    {
        XPath,
        Id,
        Name,
        ClassName,
        PartialLinkText,
        LinkText,
        CssSelector,
        TagName,
        PartialId,
        PartialName,
        PartialClass
    }
	
	public static String GetPageTitle()
    {
        return driver.getTitle();
    }
	
	public static By SetbyElement(Locator locatorType, String locatorText) throws Exception
    {
        switch (locatorType)
        { //determine which locator item we are interested in
            case XPath:
                return By.xpath(locatorText);
            case Id:
                return By.id(locatorText);
            case PartialId:
                return By.xpath("//*[contains(@id, '" + locatorText + "')]");
            case Name:
                return By.name(locatorText);
            case PartialName:
                return By.xpath("//*[contains(@name, '" + locatorText + "')]");
            case ClassName:
                return By.className(locatorText);
            case PartialClass:
                return By.xpath("//*[contains(@class, '" + locatorText + "')]");
            case LinkText:
                return By.linkText(locatorText);
            case PartialLinkText:
                return By.partialLinkText(locatorText);
            case TagName:
                return By.tagName(locatorText);
            case CssSelector:
                return By.cssSelector(locatorText);
            default:
                throw new Exception("No Locator Found");

        }

    }

	public static boolean isElementPresent(WebElement webElement) {
        try {
            boolean isPresent = webElement.isDisplayed();
            return isPresent;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    
    public static WebElement GetWebElement(String element, Locator locator)
    {
        try
        {
            return driver.findElement(SetbyElement(locator, element));
        }
        catch (Exception e)
        {
            return null;
        }
    }
    
    public static boolean ObjectLink(String element, Locator Locator, String Action, String ActionData)
    {
        WebElement elementObj = GetWebElement(element, Locator);
        switch (Action)
        {
            case "Click":
                try
                {
                    elementObj.click();
                    return true;
                }
                catch (Exception e)
                {
                	Assert.assertFalse(true);
                    return false;
                }
            case "ObjectExist":
                if (elementObj.isDisplayed())
                {
                    return true;
                }
                else
                {
                	Assert.assertFalse(true);
                    return false;
                }
            case "ReadValue":
                try
                {
                    gbReturnValue = elementObj.getAttribute("value");
                    return true;
                }
                catch (Exception e)
                {
                	Assert.assertFalse(true);
                    return false;
                }
            default:
                return false;
        }
    }
    
    public static boolean ObjectText(String element, Locator Locator,  String Action, String ActionData)
    {
        WebElement elementObj = GetWebElement(element, Locator);

        //Perform the action
        switch (Action)
        {
            case "ReadValue":
                try
                {
                    gbReturnValue = elementObj.getText().trim();
                    return true;
                }
                catch (Exception e)
                {
                	Assert.assertFalse(true);
                    return false;
                }

            case "ObjectExist":
                if (elementObj.isDisplayed())
                {
                    return true;
                }
                else
                {
                	Assert.assertFalse(true);
                    return false;
                }
            case "ObjectEnabled":
                if (elementObj.isEnabled())
                {
                	Assert.assertFalse(true);
                    return true;
                }
                else
                {
                	Assert.assertFalse(true);
                    return false;
                }
            case "VerifyValue":
                try
                {
                    if(elementObj.getText().trim().equals(ActionData))
                        return true;
                }
                catch (Exception e)
                {
                	Assert.assertFalse(true);
                    return false;
                }
            default:
                return false;
        }
    }
    
    public static boolean switchToFrame(String element){
    	try
        {
            driver.switchTo().frame(element);
            return true;
        }
        catch (Exception e)
        {
        	Assert.assertFalse(true);
            return false;
        }
    }

    public static boolean verifyImage(String fileName, WebElement element) {

        Path path = Paths.get(fileName);

        OcularResult result = Ocular.snapshot()
                                    .from(path)
                                    .sample()
                                    .using(driver)
                                    .element(element)
                                    .compare();

        return result.isEqualsImages();
    }

    public static boolean ObjectRadio(String element, Locator Locator, String Action, String CheckValue)
    {
        WebElement elementObj = GetWebElement(element, Locator);
        switch (Action)
        {
            case "SelectValue":
                try
                {
                    elementObj.click();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ReadValue":
                try
                {
                    boolean flag = elementObj.isSelected();
                    return flag;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ObjectExist":
                if (elementObj.isDisplayed())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            case "ObjectEnabled":
                if (elementObj.isEnabled())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            default:
                return false;
        }

    }

    public static boolean ObjectDropdown(String element, Locator Locator, String Action, String ActionData)
    {
        WebElement elementObj = GetWebElement(element, Locator);
        if (ActionData.contains("/"))
        {
            ActionData = ActionData.replace('/', ',');
        }

        Select selectElement = new Select(elementObj);
        switch (Action)
        {
            case "SelectValue":
                try
                {
                    selectElement.selectByVisibleText(ActionData);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ReadValue":
                try
                {
                    gbReturnValue = selectElement.getFirstSelectedOption().getText();
                }
                catch (Exception e)
                {
                    return false;
                }
            case "VerifyValue":
                gbReturnValue = selectElement.getFirstSelectedOption().getText();
                if (gbReturnValue.equals(ActionData))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            case "ObjectExist":
                if (elementObj.isDisplayed())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            default:
                return false;
        }
    }

    public static boolean ObjectButton(String element, Locator Locator, String Action)
    {
        WebElement elementObj = GetWebElement(element, Locator);
        switch (Action)
        {
            case "Click":
                try
                {
                    elementObj.click();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ObjectExist":
                if (elementObj.isDisplayed())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            case "ObjectEnabled":
                if (elementObj.isEnabled())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            default:
                return false;
        }
    }

    public static boolean ObjectEdit(String element, Locator Locator, String Action, String ActionData)
    {
        WebElement elementObj = GetWebElement(element, Locator);
        switch (Action)
        {
            case "EnterValue":
                try
                {
                    elementObj.clear();
                    elementObj.sendKeys(ActionData);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ClearValue":
                try
                {
                    elementObj.clear();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ReadValue":
                try
                {
                    gbReturnValue = elementObj.getAttribute("value");
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "VerifyValue":
                gbReturnValue = elementObj.getAttribute("value");
                if (gbReturnValue.equals(ActionData))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            case "ObjectExist":
                if (elementObj.isDisplayed())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            case "ObjectEnabled":
                if (elementObj.isEnabled())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            default:
                return false;
        }

    }

    public static boolean ObjectChkbox(String element, Locator Locator, String Action, String CheckValue)
    {
        WebElement elementObj = GetWebElement(element, Locator);
        switch (Action)
        {
            case "SelectValue":
                try
                {
                    elementObj.click();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ReadValue":
                try
                {
                    return elementObj.isSelected();
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ObjectExist":
                if (elementObj.isDisplayed())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            case "ObjectEnabled":
                if (elementObj.isEnabled())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            default:
                return false;
        }

    }

    public static boolean ObjectImage(String element, Locator Locator, String Action)
    {
    	WebElement elementObj = GetWebElement(element, Locator);
        switch (Action)
        {
            case "Click":
                try
                {
                    elementObj.click();
                }
                catch (Exception e)
                {
                    return false;
                }
            case "ObjectExist":
                if (elementObj.isDisplayed())
               {
                    return true;
                }
                else
                {
                    return false;
                }
            case "ObjectEnabled":
                if (elementObj.isEnabled())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            default:
                return false;
        }

    }

}
