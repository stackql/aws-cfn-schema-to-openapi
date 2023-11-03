---
title: ec2
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---

The ec2 service documentation.

:::info Service Summary

<div class="row">
<div class="providerDocColumn">
<span>total resources:&nbsp;<b>172</b></span><br />
<span>total selectable resources:&nbsp;<b>172</b></span><br />
<span>total methods:&nbsp;<b>172</b></span><br />
</div>
</div>

:::

## Resources
<div class="row">
<div class="providerDocColumn">
<a href="/providers/aws/ec2/capacity_reservation/">capacity_reservation</a><br />
<a href="/providers/aws/ec2/capacity_reservation_fleet/">capacity_reservation_fleet</a><br />
<a href="/providers/aws/ec2/capacity_reservation_fleets/">capacity_reservation_fleets</a><br />
<a href="/providers/aws/ec2/capacity_reservations/">capacity_reservations</a><br />
<a href="/providers/aws/ec2/carrier_gateway/">carrier_gateway</a><br />
<a href="/providers/aws/ec2/carrier_gateways/">carrier_gateways</a><br />
<a href="/providers/aws/ec2/client_vpn_authorization_rule/">client_vpn_authorization_rule</a><br />
<a href="/providers/aws/ec2/client_vpn_authorization_rules/">client_vpn_authorization_rules</a><br />
<a href="/providers/aws/ec2/client_vpn_endpoint/">client_vpn_endpoint</a><br />
<a href="/providers/aws/ec2/client_vpn_endpoints/">client_vpn_endpoints</a><br />
<a href="/providers/aws/ec2/client_vpn_route/">client_vpn_route</a><br />
<a href="/providers/aws/ec2/client_vpn_routes/">client_vpn_routes</a><br />
<a href="/providers/aws/ec2/client_vpn_target_network_association/">client_vpn_target_network_association</a><br />
<a href="/providers/aws/ec2/client_vpn_target_network_associations/">client_vpn_target_network_associations</a><br />
<a href="/providers/aws/ec2/customer_gateway/">customer_gateway</a><br />
<a href="/providers/aws/ec2/customer_gateways/">customer_gateways</a><br />
<a href="/providers/aws/ec2/dhcp_options/">dhcp_options</a><br />
<a href="/providers/aws/ec2/ec2fleet/">ec2fleet</a><br />
<a href="/providers/aws/ec2/ec2fleets/">ec2fleets</a><br />
<a href="/providers/aws/ec2/egress_only_internet_gateway/">egress_only_internet_gateway</a><br />
<a href="/providers/aws/ec2/egress_only_internet_gateways/">egress_only_internet_gateways</a><br />
<a href="/providers/aws/ec2/eip/">eip</a><br />
<a href="/providers/aws/ec2/eip_association/">eip_association</a><br />
<a href="/providers/aws/ec2/eip_associations/">eip_associations</a><br />
<a href="/providers/aws/ec2/eips/">eips</a><br />
<a href="/providers/aws/ec2/enclave_certificate_iam_role_association/">enclave_certificate_iam_role_association</a><br />
<a href="/providers/aws/ec2/enclave_certificate_iam_role_associations/">enclave_certificate_iam_role_associations</a><br />
<a href="/providers/aws/ec2/flow_log/">flow_log</a><br />
<a href="/providers/aws/ec2/flow_logs/">flow_logs</a><br />
<a href="/providers/aws/ec2/gateway_route_table_association/">gateway_route_table_association</a><br />
<a href="/providers/aws/ec2/gateway_route_table_associations/">gateway_route_table_associations</a><br />
<a href="/providers/aws/ec2/host/">host</a><br />
<a href="/providers/aws/ec2/hosts/">hosts</a><br />
<a href="/providers/aws/ec2/instance/">instance</a><br />
<a href="/providers/aws/ec2/instances/">instances</a><br />
<a href="/providers/aws/ec2/internet_gateway/">internet_gateway</a><br />
<a href="/providers/aws/ec2/internet_gateways/">internet_gateways</a><br />
<a href="/providers/aws/ec2/ipam/">ipam</a><br />
<a href="/providers/aws/ec2/ipam_allocation/">ipam_allocation</a><br />
<a href="/providers/aws/ec2/ipam_allocations/">ipam_allocations</a><br />
<a href="/providers/aws/ec2/ipam_pool/">ipam_pool</a><br />
<a href="/providers/aws/ec2/ipam_pool_cidr/">ipam_pool_cidr</a><br />
<a href="/providers/aws/ec2/ipam_pool_cidrs/">ipam_pool_cidrs</a><br />
<a href="/providers/aws/ec2/ipam_pools/">ipam_pools</a><br />
<a href="/providers/aws/ec2/ipam_resource_discoveries/">ipam_resource_discoveries</a><br />
<a href="/providers/aws/ec2/ipam_resource_discovery/">ipam_resource_discovery</a><br />
<a href="/providers/aws/ec2/ipam_resource_discovery_association/">ipam_resource_discovery_association</a><br />
<a href="/providers/aws/ec2/ipam_resource_discovery_associations/">ipam_resource_discovery_associations</a><br />
<a href="/providers/aws/ec2/ipam_scope/">ipam_scope</a><br />
<a href="/providers/aws/ec2/ipam_scopes/">ipam_scopes</a><br />
<a href="/providers/aws/ec2/ipams/">ipams</a><br />
<a href="/providers/aws/ec2/key_pair/">key_pair</a><br />
<a href="/providers/aws/ec2/key_pairs/">key_pairs</a><br />
<a href="/providers/aws/ec2/launch_template/">launch_template</a><br />
<a href="/providers/aws/ec2/launch_templates/">launch_templates</a><br />
<a href="/providers/aws/ec2/local_gateway_route/">local_gateway_route</a><br />
<a href="/providers/aws/ec2/local_gateway_route_table/">local_gateway_route_table</a><br />
<a href="/providers/aws/ec2/local_gateway_route_table_virtual_interface_group_association/">local_gateway_route_table_virtual_interface_group_association</a><br />
<a href="/providers/aws/ec2/local_gateway_route_table_virtual_interface_group_associations/">local_gateway_route_table_virtual_interface_group_associations</a><br />
<a href="/providers/aws/ec2/local_gateway_route_tables/">local_gateway_route_tables</a><br />
<a href="/providers/aws/ec2/local_gateway_route_tablevpc_association/">local_gateway_route_tablevpc_association</a><br />
<a href="/providers/aws/ec2/local_gateway_route_tablevpc_associations/">local_gateway_route_tablevpc_associations</a><br />
<a href="/providers/aws/ec2/local_gateway_routes/">local_gateway_routes</a><br />
<a href="/providers/aws/ec2/nat_gateway/">nat_gateway</a><br />
<a href="/providers/aws/ec2/nat_gateways/">nat_gateways</a><br />
<a href="/providers/aws/ec2/network_acl/">network_acl</a><br />
<a href="/providers/aws/ec2/network_acl_entries/">network_acl_entries</a><br />
<a href="/providers/aws/ec2/network_acl_entry/">network_acl_entry</a><br />
<a href="/providers/aws/ec2/network_acls/">network_acls</a><br />
<a href="/providers/aws/ec2/network_insights_access_scope/">network_insights_access_scope</a><br />
<a href="/providers/aws/ec2/network_insights_access_scope_analyses/">network_insights_access_scope_analyses</a><br />
<a href="/providers/aws/ec2/network_insights_access_scope_analysis/">network_insights_access_scope_analysis</a><br />
<a href="/providers/aws/ec2/network_insights_access_scopes/">network_insights_access_scopes</a><br />
<a href="/providers/aws/ec2/network_insights_analyses/">network_insights_analyses</a><br />
<a href="/providers/aws/ec2/network_insights_analysis/">network_insights_analysis</a><br />
<a href="/providers/aws/ec2/network_insights_path/">network_insights_path</a><br />
<a href="/providers/aws/ec2/network_insights_paths/">network_insights_paths</a><br />
<a href="/providers/aws/ec2/network_interface/">network_interface</a><br />
<a href="/providers/aws/ec2/network_interface_attachment/">network_interface_attachment</a><br />
<a href="/providers/aws/ec2/network_interface_attachments/">network_interface_attachments</a><br />
<a href="/providers/aws/ec2/network_interface_permission/">network_interface_permission</a><br />
<a href="/providers/aws/ec2/network_interface_permissions/">network_interface_permissions</a><br />
<a href="/providers/aws/ec2/network_interfaces/">network_interfaces</a><br />
<a href="/providers/aws/ec2/network_performance_metric_subscription/">network_performance_metric_subscription</a><br />
<a href="/providers/aws/ec2/network_performance_metric_subscriptions/">network_performance_metric_subscriptions</a><br />
<a href="/providers/aws/ec2/placement_group/">placement_group</a>
</div>
<div class="providerDocColumn">
<a href="/providers/aws/ec2/placement_groups/">placement_groups</a><br />
<a href="/providers/aws/ec2/prefix_list/">prefix_list</a><br />
<a href="/providers/aws/ec2/prefix_lists/">prefix_lists</a><br />
<a href="/providers/aws/ec2/route/">route</a><br />
<a href="/providers/aws/ec2/route_table/">route_table</a><br />
<a href="/providers/aws/ec2/route_tables/">route_tables</a><br />
<a href="/providers/aws/ec2/routes/">routes</a><br />
<a href="/providers/aws/ec2/security_group/">security_group</a><br />
<a href="/providers/aws/ec2/security_group_egress/">security_group_egress</a><br />
<a href="/providers/aws/ec2/security_group_egresses/">security_group_egresses</a><br />
<a href="/providers/aws/ec2/security_group_ingress/">security_group_ingress</a><br />
<a href="/providers/aws/ec2/security_group_ingresses/">security_group_ingresses</a><br />
<a href="/providers/aws/ec2/security_groups/">security_groups</a><br />
<a href="/providers/aws/ec2/spot_fleet/">spot_fleet</a><br />
<a href="/providers/aws/ec2/spot_fleets/">spot_fleets</a><br />
<a href="/providers/aws/ec2/subnet/">subnet</a><br />
<a href="/providers/aws/ec2/subnet_cidr_block/">subnet_cidr_block</a><br />
<a href="/providers/aws/ec2/subnet_cidr_blocks/">subnet_cidr_blocks</a><br />
<a href="/providers/aws/ec2/subnet_network_acl_association/">subnet_network_acl_association</a><br />
<a href="/providers/aws/ec2/subnet_network_acl_associations/">subnet_network_acl_associations</a><br />
<a href="/providers/aws/ec2/subnet_route_table_association/">subnet_route_table_association</a><br />
<a href="/providers/aws/ec2/subnet_route_table_associations/">subnet_route_table_associations</a><br />
<a href="/providers/aws/ec2/subnets/">subnets</a><br />
<a href="/providers/aws/ec2/traffic_mirror_filter/">traffic_mirror_filter</a><br />
<a href="/providers/aws/ec2/traffic_mirror_filter_rule/">traffic_mirror_filter_rule</a><br />
<a href="/providers/aws/ec2/traffic_mirror_filter_rules/">traffic_mirror_filter_rules</a><br />
<a href="/providers/aws/ec2/traffic_mirror_filters/">traffic_mirror_filters</a><br />
<a href="/providers/aws/ec2/traffic_mirror_session/">traffic_mirror_session</a><br />
<a href="/providers/aws/ec2/traffic_mirror_sessions/">traffic_mirror_sessions</a><br />
<a href="/providers/aws/ec2/traffic_mirror_target/">traffic_mirror_target</a><br />
<a href="/providers/aws/ec2/traffic_mirror_targets/">traffic_mirror_targets</a><br />
<a href="/providers/aws/ec2/transit_gateway/">transit_gateway</a><br />
<a href="/providers/aws/ec2/transit_gateway_attachment/">transit_gateway_attachment</a><br />
<a href="/providers/aws/ec2/transit_gateway_attachments/">transit_gateway_attachments</a><br />
<a href="/providers/aws/ec2/transit_gateway_connect/">transit_gateway_connect</a><br />
<a href="/providers/aws/ec2/transit_gateway_connects/">transit_gateway_connects</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_domain/">transit_gateway_multicast_domain</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_domain_association/">transit_gateway_multicast_domain_association</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_domain_associations/">transit_gateway_multicast_domain_associations</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_domains/">transit_gateway_multicast_domains</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_group_member/">transit_gateway_multicast_group_member</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_group_members/">transit_gateway_multicast_group_members</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_group_source/">transit_gateway_multicast_group_source</a><br />
<a href="/providers/aws/ec2/transit_gateway_multicast_group_sources/">transit_gateway_multicast_group_sources</a><br />
<a href="/providers/aws/ec2/transit_gateway_peering_attachment/">transit_gateway_peering_attachment</a><br />
<a href="/providers/aws/ec2/transit_gateway_peering_attachments/">transit_gateway_peering_attachments</a><br />
<a href="/providers/aws/ec2/transit_gateway_route/">transit_gateway_route</a><br />
<a href="/providers/aws/ec2/transit_gateway_route_table/">transit_gateway_route_table</a><br />
<a href="/providers/aws/ec2/transit_gateway_route_table_association/">transit_gateway_route_table_association</a><br />
<a href="/providers/aws/ec2/transit_gateway_route_table_associations/">transit_gateway_route_table_associations</a><br />
<a href="/providers/aws/ec2/transit_gateway_route_table_propagation/">transit_gateway_route_table_propagation</a><br />
<a href="/providers/aws/ec2/transit_gateway_route_table_propagations/">transit_gateway_route_table_propagations</a><br />
<a href="/providers/aws/ec2/transit_gateway_route_tables/">transit_gateway_route_tables</a><br />
<a href="/providers/aws/ec2/transit_gateway_routes/">transit_gateway_routes</a><br />
<a href="/providers/aws/ec2/transit_gateway_vpc_attachment/">transit_gateway_vpc_attachment</a><br />
<a href="/providers/aws/ec2/transit_gateway_vpc_attachments/">transit_gateway_vpc_attachments</a><br />
<a href="/providers/aws/ec2/transit_gateways/">transit_gateways</a><br />
<a href="/providers/aws/ec2/volume/">volume</a><br />
<a href="/providers/aws/ec2/volume_attachment/">volume_attachment</a><br />
<a href="/providers/aws/ec2/volume_attachments/">volume_attachments</a><br />
<a href="/providers/aws/ec2/volumes/">volumes</a><br />
<a href="/providers/aws/ec2/vpc/">vpc</a><br />
<a href="/providers/aws/ec2/vpc_cidr_block/">vpc_cidr_block</a><br />
<a href="/providers/aws/ec2/vpc_cidr_blocks/">vpc_cidr_blocks</a><br />
<a href="/providers/aws/ec2/vpc_endpoint/">vpc_endpoint</a><br />
<a href="/providers/aws/ec2/vpc_endpoint_connection_notification/">vpc_endpoint_connection_notification</a><br />
<a href="/providers/aws/ec2/vpc_endpoint_connection_notifications/">vpc_endpoint_connection_notifications</a><br />
<a href="/providers/aws/ec2/vpc_endpoint_service/">vpc_endpoint_service</a><br />
<a href="/providers/aws/ec2/vpc_endpoint_service_permissions/">vpc_endpoint_service_permissions</a><br />
<a href="/providers/aws/ec2/vpc_endpoint_services/">vpc_endpoint_services</a><br />
<a href="/providers/aws/ec2/vpc_endpoints/">vpc_endpoints</a><br />
<a href="/providers/aws/ec2/vpc_gateway_attachment/">vpc_gateway_attachment</a><br />
<a href="/providers/aws/ec2/vpc_gateway_attachments/">vpc_gateway_attachments</a><br />
<a href="/providers/aws/ec2/vpc_peering_connection/">vpc_peering_connection</a><br />
<a href="/providers/aws/ec2/vpc_peering_connections/">vpc_peering_connections</a><br />
<a href="/providers/aws/ec2/vpcdhcp_options_association/">vpcdhcp_options_association</a><br />
<a href="/providers/aws/ec2/vpcdhcp_options_associations/">vpcdhcp_options_associations</a><br />
<a href="/providers/aws/ec2/vpcs/">vpcs</a><br />
<a href="/providers/aws/ec2/vpn_connection/">vpn_connection</a><br />
<a href="/providers/aws/ec2/vpn_connection_route/">vpn_connection_route</a><br />
<a href="/providers/aws/ec2/vpn_connection_routes/">vpn_connection_routes</a><br />
<a href="/providers/aws/ec2/vpn_connections/">vpn_connections</a><br />
<a href="/providers/aws/ec2/vpn_gateway/">vpn_gateway</a><br />
<a href="/providers/aws/ec2/vpn_gateway_route_propagation/">vpn_gateway_route_propagation</a><br />
<a href="/providers/aws/ec2/vpn_gateway_route_propagations/">vpn_gateway_route_propagations</a><br />
<a href="/providers/aws/ec2/vpn_gateways/">vpn_gateways</a>
</div>
</div>