---
title: ec2_native
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2_native
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---

The ec2_native service documentation.

:::info Service Summary

<div class="row">
<div class="providerDocColumn">
<span>total resources:&nbsp;<b>242</b></span><br />
</div>
</div>

:::

## Resources
<div class="row">
<div class="providerDocColumn">
<a href="/providers/aws/ec2_native/account_attributes/">account_attributes</a><br />
<a href="/providers/aws/ec2_native/address/">address</a><br />
<a href="/providers/aws/ec2_native/address_attribute/">address_attribute</a><br />
<a href="/providers/aws/ec2_native/address_to_classic/">address_to_classic</a><br />
<a href="/providers/aws/ec2_native/address_to_vpc/">address_to_vpc</a><br />
<a href="/providers/aws/ec2_native/addresses/">addresses</a><br />
<a href="/providers/aws/ec2_native/addresses_attribute/">addresses_attribute</a><br />
<a href="/providers/aws/ec2_native/aggregate_id_format/">aggregate_id_format</a><br />
<a href="/providers/aws/ec2_native/associated_enclave_certificate_iam_roles/">associated_enclave_certificate_iam_roles</a><br />
<a href="/providers/aws/ec2_native/associated_ipv6_pool_cidrs/">associated_ipv6_pool_cidrs</a><br />
<a href="/providers/aws/ec2_native/availability_zone_group/">availability_zone_group</a><br />
<a href="/providers/aws/ec2_native/availability_zones/">availability_zones</a><br />
<a href="/providers/aws/ec2_native/bundle_tasks/">bundle_tasks</a><br />
<a href="/providers/aws/ec2_native/byoip_cidr_to_ipam/">byoip_cidr_to_ipam</a><br />
<a href="/providers/aws/ec2_native/byoip_cidrs/">byoip_cidrs</a><br />
<a href="/providers/aws/ec2_native/capacity_reservation_fleets/">capacity_reservation_fleets</a><br />
<a href="/providers/aws/ec2_native/capacity_reservation_usage/">capacity_reservation_usage</a><br />
<a href="/providers/aws/ec2_native/capacity_reservations/">capacity_reservations</a><br />
<a href="/providers/aws/ec2_native/carrier_gateways/">carrier_gateways</a><br />
<a href="/providers/aws/ec2_native/classic_link_instances/">classic_link_instances</a><br />
<a href="/providers/aws/ec2_native/classic_link_vpc/">classic_link_vpc</a><br />
<a href="/providers/aws/ec2_native/client_vpn_authorization_rules/">client_vpn_authorization_rules</a><br />
<a href="/providers/aws/ec2_native/client_vpn_client_certificate_revocation_list/">client_vpn_client_certificate_revocation_list</a><br />
<a href="/providers/aws/ec2_native/client_vpn_client_configuration/">client_vpn_client_configuration</a><br />
<a href="/providers/aws/ec2_native/client_vpn_connections/">client_vpn_connections</a><br />
<a href="/providers/aws/ec2_native/client_vpn_endpoints/">client_vpn_endpoints</a><br />
<a href="/providers/aws/ec2_native/client_vpn_ingress/">client_vpn_ingress</a><br />
<a href="/providers/aws/ec2_native/client_vpn_routes/">client_vpn_routes</a><br />
<a href="/providers/aws/ec2_native/client_vpn_target_networks/">client_vpn_target_networks</a><br />
<a href="/providers/aws/ec2_native/coip_pool_usage/">coip_pool_usage</a><br />
<a href="/providers/aws/ec2_native/coip_pools/">coip_pools</a><br />
<a href="/providers/aws/ec2_native/console_output/">console_output</a><br />
<a href="/providers/aws/ec2_native/console_screenshot/">console_screenshot</a><br />
<a href="/providers/aws/ec2_native/conversion_tasks/">conversion_tasks</a><br />
<a href="/providers/aws/ec2_native/customer_gateways/">customer_gateways</a><br />
<a href="/providers/aws/ec2_native/default_credit_specification/">default_credit_specification</a><br />
<a href="/providers/aws/ec2_native/default_subnet/">default_subnet</a><br />
<a href="/providers/aws/ec2_native/default_vpc/">default_vpc</a><br />
<a href="/providers/aws/ec2_native/dhcp_options/">dhcp_options</a><br />
<a href="/providers/aws/ec2_native/diagnostic_interrupt/">diagnostic_interrupt</a><br />
<a href="/providers/aws/ec2_native/ebs_default_kms_key_id/">ebs_default_kms_key_id</a><br />
<a href="/providers/aws/ec2_native/ebs_encryption_by_default/">ebs_encryption_by_default</a><br />
<a href="/providers/aws/ec2_native/egress_only_internet_gateways/">egress_only_internet_gateways</a><br />
<a href="/providers/aws/ec2_native/elastic_gpus/">elastic_gpus</a><br />
<a href="/providers/aws/ec2_native/enclave_certificate_iam_role/">enclave_certificate_iam_role</a><br />
<a href="/providers/aws/ec2_native/export_image_tasks/">export_image_tasks</a><br />
<a href="/providers/aws/ec2_native/export_tasks/">export_tasks</a><br />
<a href="/providers/aws/ec2_native/fast_launch/">fast_launch</a><br />
<a href="/providers/aws/ec2_native/fast_launch_images/">fast_launch_images</a><br />
<a href="/providers/aws/ec2_native/fast_snapshot_restores/">fast_snapshot_restores</a><br />
<a href="/providers/aws/ec2_native/fleet_history/">fleet_history</a><br />
<a href="/providers/aws/ec2_native/fleet_instances/">fleet_instances</a><br />
<a href="/providers/aws/ec2_native/fleets/">fleets</a><br />
<a href="/providers/aws/ec2_native/flow_logs/">flow_logs</a><br />
<a href="/providers/aws/ec2_native/flow_logs_integration_template/">flow_logs_integration_template</a><br />
<a href="/providers/aws/ec2_native/fpga_image_attribute/">fpga_image_attribute</a><br />
<a href="/providers/aws/ec2_native/fpga_images/">fpga_images</a><br />
<a href="/providers/aws/ec2_native/groups_for_capacity_reservation/">groups_for_capacity_reservation</a><br />
<a href="/providers/aws/ec2_native/host_reservation_offerings/">host_reservation_offerings</a><br />
<a href="/providers/aws/ec2_native/host_reservation_purchase_preview/">host_reservation_purchase_preview</a><br />
<a href="/providers/aws/ec2_native/host_reservations/">host_reservations</a><br />
<a href="/providers/aws/ec2_native/hosts/">hosts</a><br />
<a href="/providers/aws/ec2_native/iam_instance_profile/">iam_instance_profile</a><br />
<a href="/providers/aws/ec2_native/iam_instance_profile_associations/">iam_instance_profile_associations</a><br />
<a href="/providers/aws/ec2_native/id_format/">id_format</a><br />
<a href="/providers/aws/ec2_native/identity_id_format/">identity_id_format</a><br />
<a href="/providers/aws/ec2_native/image_attribute/">image_attribute</a><br />
<a href="/providers/aws/ec2_native/image_deprecation/">image_deprecation</a><br />
<a href="/providers/aws/ec2_native/image_from_recycle_bin/">image_from_recycle_bin</a><br />
<a href="/providers/aws/ec2_native/images/">images</a><br />
<a href="/providers/aws/ec2_native/images_in_recycle_bin/">images_in_recycle_bin</a><br />
<a href="/providers/aws/ec2_native/import_image_tasks/">import_image_tasks</a><br />
<a href="/providers/aws/ec2_native/import_snapshot_tasks/">import_snapshot_tasks</a><br />
<a href="/providers/aws/ec2_native/import_task/">import_task</a><br />
<a href="/providers/aws/ec2_native/instance_attribute/">instance_attribute</a><br />
<a href="/providers/aws/ec2_native/instance_capacity_reservation_attributes/">instance_capacity_reservation_attributes</a><br />
<a href="/providers/aws/ec2_native/instance_credit_specifications/">instance_credit_specifications</a><br />
<a href="/providers/aws/ec2_native/instance_event_notification_attributes/">instance_event_notification_attributes</a><br />
<a href="/providers/aws/ec2_native/instance_event_start_time/">instance_event_start_time</a><br />
<a href="/providers/aws/ec2_native/instance_event_windows/">instance_event_windows</a><br />
<a href="/providers/aws/ec2_native/instance_export_task/">instance_export_task</a><br />
<a href="/providers/aws/ec2_native/instance_maintenance_options/">instance_maintenance_options</a><br />
<a href="/providers/aws/ec2_native/instance_metadata_options/">instance_metadata_options</a><br />
<a href="/providers/aws/ec2_native/instance_placement/">instance_placement</a><br />
<a href="/providers/aws/ec2_native/instance_status/">instance_status</a><br />
<a href="/providers/aws/ec2_native/instance_type_offerings/">instance_type_offerings</a><br />
<a href="/providers/aws/ec2_native/instance_types/">instance_types</a><br />
<a href="/providers/aws/ec2_native/instance_types_from_instance_requirements/">instance_types_from_instance_requirements</a><br />
<a href="/providers/aws/ec2_native/instance_uefi_data/">instance_uefi_data</a><br />
<a href="/providers/aws/ec2_native/instances/">instances</a><br />
<a href="/providers/aws/ec2_native/instances_start/">instances_start</a><br />
<a href="/providers/aws/ec2_native/internet_gateways/">internet_gateways</a><br />
<a href="/providers/aws/ec2_native/ipam_address_history/">ipam_address_history</a><br />
<a href="/providers/aws/ec2_native/ipam_organization_admin_account/">ipam_organization_admin_account</a><br />
<a href="/providers/aws/ec2_native/ipam_pool_allocations/">ipam_pool_allocations</a><br />
<a href="/providers/aws/ec2_native/ipam_pool_cidrs/">ipam_pool_cidrs</a><br />
<a href="/providers/aws/ec2_native/ipam_pools/">ipam_pools</a><br />
<a href="/providers/aws/ec2_native/ipam_resource_cidrs/">ipam_resource_cidrs</a><br />
<a href="/providers/aws/ec2_native/ipam_scopes/">ipam_scopes</a><br />
<a href="/providers/aws/ec2_native/ipams/">ipams</a><br />
<a href="/providers/aws/ec2_native/ipv6_addresses/">ipv6_addresses</a><br />
<a href="/providers/aws/ec2_native/ipv6_pools/">ipv6_pools</a><br />
<a href="/providers/aws/ec2_native/key_pairs/">key_pairs</a><br />
<a href="/providers/aws/ec2_native/launch_template_data/">launch_template_data</a><br />
<a href="/providers/aws/ec2_native/launch_template_versions/">launch_template_versions</a><br />
<a href="/providers/aws/ec2_native/launch_templates/">launch_templates</a><br />
<a href="/providers/aws/ec2_native/local_gateway_route_table_virtual_interface_group_associations/">local_gateway_route_table_virtual_interface_group_associations</a><br />
<a href="/providers/aws/ec2_native/local_gateway_route_table_vpc_associations/">local_gateway_route_table_vpc_associations</a><br />
<a href="/providers/aws/ec2_native/local_gateway_route_tables/">local_gateway_route_tables</a><br />
<a href="/providers/aws/ec2_native/local_gateway_routes/">local_gateway_routes</a><br />
<a href="/providers/aws/ec2_native/local_gateway_virtual_interface_groups/">local_gateway_virtual_interface_groups</a><br />
<a href="/providers/aws/ec2_native/local_gateway_virtual_interfaces/">local_gateway_virtual_interfaces</a><br />
<a href="/providers/aws/ec2_native/local_gateways/">local_gateways</a><br />
<a href="/providers/aws/ec2_native/managed_prefix_list_associations/">managed_prefix_list_associations</a><br />
<a href="/providers/aws/ec2_native/managed_prefix_list_entries/">managed_prefix_list_entries</a><br />
<a href="/providers/aws/ec2_native/managed_prefix_list_version/">managed_prefix_list_version</a><br />
<a href="/providers/aws/ec2_native/managed_prefix_lists/">managed_prefix_lists</a><br />
<a href="/providers/aws/ec2_native/moving_addresses/">moving_addresses</a><br />
<a href="/providers/aws/ec2_native/nat_gateways/">nat_gateways</a><br />
<a href="/providers/aws/ec2_native/network_acl_association/">network_acl_association</a><br />
<a href="/providers/aws/ec2_native/network_acl_entry/">network_acl_entry</a>
</div>
<div class="providerDocColumn">
<a href="/providers/aws/ec2_native/network_acls/">network_acls</a><br />
<a href="/providers/aws/ec2_native/network_insights_access_scope_analyses/">network_insights_access_scope_analyses</a><br />
<a href="/providers/aws/ec2_native/network_insights_access_scope_analysis/">network_insights_access_scope_analysis</a><br />
<a href="/providers/aws/ec2_native/network_insights_access_scope_analysis_findings/">network_insights_access_scope_analysis_findings</a><br />
<a href="/providers/aws/ec2_native/network_insights_access_scope_content/">network_insights_access_scope_content</a><br />
<a href="/providers/aws/ec2_native/network_insights_access_scopes/">network_insights_access_scopes</a><br />
<a href="/providers/aws/ec2_native/network_insights_analyses/">network_insights_analyses</a><br />
<a href="/providers/aws/ec2_native/network_insights_analysis/">network_insights_analysis</a><br />
<a href="/providers/aws/ec2_native/network_insights_paths/">network_insights_paths</a><br />
<a href="/providers/aws/ec2_native/network_interface_attribute/">network_interface_attribute</a><br />
<a href="/providers/aws/ec2_native/network_interface_permissions/">network_interface_permissions</a><br />
<a href="/providers/aws/ec2_native/network_interfaces/">network_interfaces</a><br />
<a href="/providers/aws/ec2_native/password_data/">password_data</a><br />
<a href="/providers/aws/ec2_native/placement_groups/">placement_groups</a><br />
<a href="/providers/aws/ec2_native/prefix_lists/">prefix_lists</a><br />
<a href="/providers/aws/ec2_native/principal_id_format/">principal_id_format</a><br />
<a href="/providers/aws/ec2_native/private_dns_name_options/">private_dns_name_options</a><br />
<a href="/providers/aws/ec2_native/private_ip_addresses/">private_ip_addresses</a><br />
<a href="/providers/aws/ec2_native/product_instance/">product_instance</a><br />
<a href="/providers/aws/ec2_native/public_ipv4_pool_cidr/">public_ipv4_pool_cidr</a><br />
<a href="/providers/aws/ec2_native/public_ipv4_pools/">public_ipv4_pools</a><br />
<a href="/providers/aws/ec2_native/queued_reserved_instances/">queued_reserved_instances</a><br />
<a href="/providers/aws/ec2_native/regions/">regions</a><br />
<a href="/providers/aws/ec2_native/replace_root_volume_tasks/">replace_root_volume_tasks</a><br />
<a href="/providers/aws/ec2_native/reserved_instances/">reserved_instances</a><br />
<a href="/providers/aws/ec2_native/reserved_instances_exchange_quote/">reserved_instances_exchange_quote</a><br />
<a href="/providers/aws/ec2_native/reserved_instances_listings/">reserved_instances_listings</a><br />
<a href="/providers/aws/ec2_native/reserved_instances_modifications/">reserved_instances_modifications</a><br />
<a href="/providers/aws/ec2_native/reserved_instances_offerings/">reserved_instances_offerings</a><br />
<a href="/providers/aws/ec2_native/restore_image_task/">restore_image_task</a><br />
<a href="/providers/aws/ec2_native/route/">route</a><br />
<a href="/providers/aws/ec2_native/route_table_association/">route_table_association</a><br />
<a href="/providers/aws/ec2_native/route_tables/">route_tables</a><br />
<a href="/providers/aws/ec2_native/scheduled_instance_availability/">scheduled_instance_availability</a><br />
<a href="/providers/aws/ec2_native/scheduled_instances/">scheduled_instances</a><br />
<a href="/providers/aws/ec2_native/security_group_egress/">security_group_egress</a><br />
<a href="/providers/aws/ec2_native/security_group_ingress/">security_group_ingress</a><br />
<a href="/providers/aws/ec2_native/security_group_references/">security_group_references</a><br />
<a href="/providers/aws/ec2_native/security_group_rule_descriptions_egress/">security_group_rule_descriptions_egress</a><br />
<a href="/providers/aws/ec2_native/security_group_rule_descriptions_ingress/">security_group_rule_descriptions_ingress</a><br />
<a href="/providers/aws/ec2_native/security_group_rules/">security_group_rules</a><br />
<a href="/providers/aws/ec2_native/security_groups/">security_groups</a><br />
<a href="/providers/aws/ec2_native/security_groups_to_client_vpn_target_network/">security_groups_to_client_vpn_target_network</a><br />
<a href="/providers/aws/ec2_native/serial_console_access/">serial_console_access</a><br />
<a href="/providers/aws/ec2_native/serial_console_access_status/">serial_console_access_status</a><br />
<a href="/providers/aws/ec2_native/snapshot_attribute/">snapshot_attribute</a><br />
<a href="/providers/aws/ec2_native/snapshot_from_recycle_bin/">snapshot_from_recycle_bin</a><br />
<a href="/providers/aws/ec2_native/snapshot_tier/">snapshot_tier</a><br />
<a href="/providers/aws/ec2_native/snapshot_tier_status/">snapshot_tier_status</a><br />
<a href="/providers/aws/ec2_native/snapshots/">snapshots</a><br />
<a href="/providers/aws/ec2_native/snapshots_in_recycle_bin/">snapshots_in_recycle_bin</a><br />
<a href="/providers/aws/ec2_native/spot_datafeed_subscription/">spot_datafeed_subscription</a><br />
<a href="/providers/aws/ec2_native/spot_fleet/">spot_fleet</a><br />
<a href="/providers/aws/ec2_native/spot_fleet_instances/">spot_fleet_instances</a><br />
<a href="/providers/aws/ec2_native/spot_fleet_request_history/">spot_fleet_request_history</a><br />
<a href="/providers/aws/ec2_native/spot_fleet_requests/">spot_fleet_requests</a><br />
<a href="/providers/aws/ec2_native/spot_instance_requests/">spot_instance_requests</a><br />
<a href="/providers/aws/ec2_native/spot_instances/">spot_instances</a><br />
<a href="/providers/aws/ec2_native/spot_placement_scores/">spot_placement_scores</a><br />
<a href="/providers/aws/ec2_native/spot_price_history/">spot_price_history</a><br />
<a href="/providers/aws/ec2_native/stale_security_groups/">stale_security_groups</a><br />
<a href="/providers/aws/ec2_native/store_image_tasks/">store_image_tasks</a><br />
<a href="/providers/aws/ec2_native/subnet_attribute/">subnet_attribute</a><br />
<a href="/providers/aws/ec2_native/subnet_cidr_block/">subnet_cidr_block</a><br />
<a href="/providers/aws/ec2_native/subnet_cidr_reservations/">subnet_cidr_reservations</a><br />
<a href="/providers/aws/ec2_native/subnets/">subnets</a><br />
<a href="/providers/aws/ec2_native/tags/">tags</a><br />
<a href="/providers/aws/ec2_native/traffic_mirror_filter_network_services/">traffic_mirror_filter_network_services</a><br />
<a href="/providers/aws/ec2_native/traffic_mirror_filter_rule/">traffic_mirror_filter_rule</a><br />
<a href="/providers/aws/ec2_native/traffic_mirror_filters/">traffic_mirror_filters</a><br />
<a href="/providers/aws/ec2_native/traffic_mirror_sessions/">traffic_mirror_sessions</a><br />
<a href="/providers/aws/ec2_native/traffic_mirror_targets/">traffic_mirror_targets</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_attachment_propagations/">transit_gateway_attachment_propagations</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_attachments/">transit_gateway_attachments</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_connect_peers/">transit_gateway_connect_peers</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_connects/">transit_gateway_connects</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_multicast_domain_associations/">transit_gateway_multicast_domain_associations</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_multicast_domains/">transit_gateway_multicast_domains</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_multicast_group_members/">transit_gateway_multicast_group_members</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_multicast_group_sources/">transit_gateway_multicast_group_sources</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_multicast_groups/">transit_gateway_multicast_groups</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_peering_attachments/">transit_gateway_peering_attachments</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_prefix_list_references/">transit_gateway_prefix_list_references</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_route_table_associations/">transit_gateway_route_table_associations</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_route_table_propagations/">transit_gateway_route_table_propagations</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_route_tables/">transit_gateway_route_tables</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_routes/">transit_gateway_routes</a><br />
<a href="/providers/aws/ec2_native/transit_gateway_vpc_attachments/">transit_gateway_vpc_attachments</a><br />
<a href="/providers/aws/ec2_native/transit_gateways/">transit_gateways</a><br />
<a href="/providers/aws/ec2_native/trunk_interface/">trunk_interface</a><br />
<a href="/providers/aws/ec2_native/trunk_interface_associations/">trunk_interface_associations</a><br />
<a href="/providers/aws/ec2_native/vgw_route_propagation/">vgw_route_propagation</a><br />
<a href="/providers/aws/ec2_native/volume_attribute/">volume_attribute</a><br />
<a href="/providers/aws/ec2_native/volume_i_o/">volume_i_o</a><br />
<a href="/providers/aws/ec2_native/volume_status/">volume_status</a><br />
<a href="/providers/aws/ec2_native/volumes/">volumes</a><br />
<a href="/providers/aws/ec2_native/volumes_modifications/">volumes_modifications</a><br />
<a href="/providers/aws/ec2_native/vpc_attribute/">vpc_attribute</a><br />
<a href="/providers/aws/ec2_native/vpc_cidr_block/">vpc_cidr_block</a><br />
<a href="/providers/aws/ec2_native/vpc_classic_link/">vpc_classic_link</a><br />
<a href="/providers/aws/ec2_native/vpc_classic_link_dns_support/">vpc_classic_link_dns_support</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoint_connection_notifications/">vpc_endpoint_connection_notifications</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoint_connections/">vpc_endpoint_connections</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoint_service_configurations/">vpc_endpoint_service_configurations</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoint_service_payer_responsibility/">vpc_endpoint_service_payer_responsibility</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoint_service_permissions/">vpc_endpoint_service_permissions</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoint_service_private_dns_verification/">vpc_endpoint_service_private_dns_verification</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoint_services/">vpc_endpoint_services</a><br />
<a href="/providers/aws/ec2_native/vpc_endpoints/">vpc_endpoints</a><br />
<a href="/providers/aws/ec2_native/vpc_peering_connection_options/">vpc_peering_connection_options</a><br />
<a href="/providers/aws/ec2_native/vpc_peering_connections/">vpc_peering_connections</a><br />
<a href="/providers/aws/ec2_native/vpc_tenancy/">vpc_tenancy</a><br />
<a href="/providers/aws/ec2_native/vpcs/">vpcs</a><br />
<a href="/providers/aws/ec2_native/vpn_connection_device_sample_configuration/">vpn_connection_device_sample_configuration</a><br />
<a href="/providers/aws/ec2_native/vpn_connection_device_types/">vpn_connection_device_types</a><br />
<a href="/providers/aws/ec2_native/vpn_connection_options/">vpn_connection_options</a><br />
<a href="/providers/aws/ec2_native/vpn_connection_route/">vpn_connection_route</a><br />
<a href="/providers/aws/ec2_native/vpn_connections/">vpn_connections</a><br />
<a href="/providers/aws/ec2_native/vpn_gateways/">vpn_gateways</a><br />
<a href="/providers/aws/ec2_native/vpn_tunnel_certificate/">vpn_tunnel_certificate</a><br />
<a href="/providers/aws/ec2_native/vpn_tunnel_options/">vpn_tunnel_options</a>
</div>
</div>