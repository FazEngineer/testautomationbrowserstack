browserstack_parallel:
	make -j bs_windows_10_firefox_69 bs_windows_8.1_ie_11

bs_windows_10_firefox_69:
	mvn test -Dbs_local_testing=false -Dbs_browser=Firefox -Dbs_browser_version=69.0 -Dbs_os=Windows -Dbs_os_version=10 -Dbs_selenium_version=3.141.59

bs_windows_8.1_ie_11:
	mvn test -Dbs_local_testing=false -Dbs_browser=IE -Dbs_browser_version=11.0 -Dbs_os=Windows -Dbs_os_version=8.1 -Dbs_selenium_version=3.141.59