---
title: "Simple IP Version 6 Routing Explained."
date: "2022-09-09T11:09:05"
description: "In this blog post (and future posts), I want to break down the concepts that puzzled me in the past during my CCNA journey."
---
In this blog post (and future posts), I want to break down the concepts that puzzled me in the past during my CCNA journey. This time, I want to explain IPv6 with a simple IPv6 routing scenario: Three routers connected to each other with IPv6 solely. The router's names are UK cities, Cardiff, Bristol and Exeter.

As a side point, I will use an IPv6 global unicast address solely. The majority types of IPv6 addresses I will leave out for the moment to simplify things.

The IPv6 global unicast address is split up into several portions. For example:

* `2001:0DB8:0001:0002:0000:0000:0000:0002/64` is a full hexadecimal address.

* `2001:DB8:1:2::2/64` is an abbreviated hexadecimal address.

* `2001:DB8:1:2::/64` is a subnet.

* `/64` is the prefix length.

* `2` is a unique hexadecimal number for the subnet.

We should enable IPv6 on those interfaces we are using first. For example, Router-Cardiff’s Gigabit 0/0 interface:
```
Router-Cardiff(config)#interface g0/0
Router-Cardiff(config-if)#ipv6 enable
```

Next, we are going to use a unique global unicast address for each interface. The IPv6 global unicast address is similar to the IPv4 public address, they are both used on the internet. Let’s configure each router’s interface, for example:
```
Router-Cardiff(config)#interface g0/0
Router-Cardiff(config-if)#ipv6 address 2001:DB8:1:2::2/64
```
```
Router-Bristol(config)#interface g0/0
Router-Bristol(config-if)#ipv6 address 2001:DB8:1:2::3/64
Router-Bristol(config)#interface g0/1
Router-Bristol(config-if)#ipv6 address 2001:DB8:2:2::4/64
```
```
Router-Exeter(config)#interface g0/1
Router-Exeter(config-if)#ipv6 address 2001:DB8:2:2::5/64
```

It’s good practice to confirm your changes, so confirm with the ```show ipv6 interface brief``` command afterwards:
```
Router-Exeter(config-if)#do show ipv6 interface brief
~
GigabitEthernet0/1 [up/up]
FE80::230:A3FF:FE27:9102
2001:DB8:2:2::5
```

Enable forwarding of IPv6 unicast packets on each router. For example, Router-Cardiff’s global configuration:
```
Router-Cardiff(config)#ipv6 unicast-routing
```

Lastly, we should configure IPv6 static routes between Router-Cardiff and Router-Exeter, with Router-Bristol in the middle as a next-hop. If we didn’t perform static routes, Router-Cardiff can’t see Router-Exeter and vice-versa.
```
Router-Cardiff(config)#ipv6 route 2001:DB8:2:2::/64 2001:DB8:1:2::3
```
The above indicates the IPv6 route to the 2001:DB8:2:2::/64 subnet address via Router-Bristol’s Gigabit 0/0 interface.

```
Router-Exeter(config)#ipv6 route 2001:DB8:1:2::/64 2001:DB8:2:2::4
```
The above indicates the IPv6 route to the 2001:DB8:1:2::/64 subnet address via Router-Bristol’s Gigabit 0/1 interface.

The ping from Router-Cardiff to Router-Exeter’s Gigabit 0/1 interface should work now:
```
Router-Cardiff#ping 2001:DB8:2:2::5
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 2001:DB8:2:2::5, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 0/0/0 ms
```
I will link the Cisco Packet Tracer file for this scenario below. I found it useful to ping from Router-Cardiff to Router-Exeter in simulation mode and see exactly the layers 2 and 3 for each router through the lifespan of a ping.