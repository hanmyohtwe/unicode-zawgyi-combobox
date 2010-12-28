<?php
/*
Plugin Name: Unicode & Zawgyi Combobox
Plugin URI: http://wordpress.org/extend/plugins/unicode-zawgyi-combobox/
Description: Combobox for convert between unicode and zawgyi. javascript is written by solvewaresolution. If you add this plugin, combobox will show and user can change zawgyi or unicode 5.1 to see your website or blog.
Version: 0.1
Author: Saturngod
Author URI: http://en.saturngod.net
*/

if(!is_admin())
{
	add_action('wp_head', 'addscript');
	
}

function addscript()
{
	$plugin_url= get_option('siteurl').'/wp-content/plugins/'.dirname(plugin_basename(__FILE__));
	?>
	<script src="<?php echo $plugin_url ?>/mm3zgcvtr.js"></script>
<?php
}
?>