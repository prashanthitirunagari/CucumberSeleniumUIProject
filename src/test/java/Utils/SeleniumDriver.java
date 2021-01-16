package Utils;




import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.ProfilesIni;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;


public class SeleniumDriver {

    public static SeleniumDriver seleniumDriver;
    public static WebDriver driver;
    public static WebDriverWait waitDriver;

    public final static int TIMEOUT = 30;
    public final static int PAGE_LOAD_TIMEOUT = 30;
    public static String browser=System.getenv("Browser"), url=System.getenv("ApplicationURL");
    //public static String browser="firefox", url="https://www.spicejet.com/";
    public static String gbReturnValue="";

    public static void loadConfigProperties() throws IOException{
    	Properties prop = new Properties();
    	InputStream stream = new FileInputStream(System.getProperty("user.dir") + "\\src\\test\\resources\\config.properties");
    	prop.load(stream);
    	browser=prop.getProperty("browserName");
    	url = prop.getProperty("applicationURL");
    }
    
    public static void InitializeDriver() throws InterruptedException {
    	if(browser.toLowerCase().equals("firefox")){
    		System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\geckodriver.exe");
    		FirefoxOptions ops =new FirefoxOptions();
    		ops.setPageLoadStrategy(PageLoadStrategy.NORMAL);
    		//ops.setBinary("C:\\Program Files\\Mozilla Firefox\\firefox.exe");
    		/*ProfilesIni allprof = new ProfilesIni();
    		FirefoxProfile prof = allprof.getProfile("default");
    		prof.setPreference("dom.webnotifications.enabled", false);
    		ops.setProfile(prof);*/
	        driver = new FirefoxDriver(ops);
	        driver.manage().window().maximize();
	        //waitDriver = new WebDriverWait(driver, TIMEOUT);
	        driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
	        driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
	     }else if(browser.toLowerCase().equals("chrome")){
    		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\chromedriver.exe");
    		ChromeOptions ops = new ChromeOptions();
    		ops.addArguments("--disable-notifications");
    		ops.addArguments("disable_infobars");
    		ops.addArguments("--start-maximized");
    		ops.setPageLoadStrategy(PageLoadStrategy.NORMAL);
            ops.setAcceptInsecureCerts(true);
            driver = new ChromeDriver(ops);
           
            //waitDriver = new WebDriverWait(driver, TIMEOUT);
            driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
            driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
            String window=driver.getWindowHandle();
            System.out.println("Window ->"+window);
    	}else if(browser.toLowerCase().equals("ie")){
    		System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\IEDriverServer.exe");
    		
            
            driver = new InternetExplorerDriver();
           
            
    	}

    }

    public static void openPage(String url) {
        driver.get(url);
    }

    public static WebDriver getDriver() {
        return driver;
    }

   
    public static void waitForPageToLoad()
    {
    	try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
}
;