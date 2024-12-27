# Websites for beginners
In 2025, there are many options for building websites - they differ on price, user-friendliness, and flexibility. In this document I will try to outline every viable option for hosting and building a website.

### How they get you ($$$)
When researching most of these options, the payments can be quite confusing.

> For example, 'fasthosts' email hosting boasts a £1/month for two mailboxes, which is a fantastic deal! But this is only for the first 12 months, after which it is £2.40 per month.

It is important to consider there are nuances in prices that may be situation-specific (e.g. getting a cheap domain for one year instead of a good price for many). Any prices listed here are of the 'settled-in' price (i.e. after the cheap period).

### Understanding the ecosystem
When creating a website, there are 4 parts to consider: DNS Registrar, Website Builder, Website Host, and Mail Host. It is possible for one application (e.g. wix) to do all of these together, but they can be more expensive (because people pay for convenience).


<!-- 
architecture-beta
    group api(cloud)[API]

    service dns(database)[DNS] in api
    service website_builder(server)[Website Builder] in api
    service website_host(server)[Website Host] in api
    service mail_host(server)[Mail Host] in api
    
    dns:T -- B:mail_host
    dns:T -- B:website_host
    website_builder:L --\> R:website_host
-->

The basic ecosystem works such that the DNS links to the mail host and website host, and the website builder is used for the user to create the website that is then hosted on the website hosting service:

![alt text](<Untitled diagram-2024-12-27-034746.png>)

It is not *that* much hassle to setup these services independently, and once they are configured there is little to no maintenance required. It is my opinion that the cost benefit greatly exceeds the effort to understand the technologies, but that may be my bias.

## Domain Name (DNS) Registrars
The 'domain name' is the main part of the address used to access your website, for example, google's domain name is '**google.com**'. Domain names vary in price (cars.com sold for $872 million 🤯)

- 123 Reg
    - was £0.79 for first year, subsequently £14.39/yr
- Squarespace
    - £16/yr
- ~~Google Domains~~ (discontinued)
- GoDaddy
    - £0.01 for first year, subsequently £12.99 minimum 3 year contract
- Namecheap
    - £5.98/yr
- domain.com
    - £6.99/yr
- fasthosts
    - £0.49 for 1 year, subsequently £12.99/yr

All of these DNS registrars allow you to fully manage the DNS records, hence you can route the domain name to any website host you pick.

## Website building / hosting

- Squarespace
- Google Sites
- Wordpress
    - Can be hosted using:
        - Bluehost
        - Wordpress
        - WP Engine
- Wix Sites
- GitHub

## Custom emails
If you want to have an email @yourdomain (e.g. matthew@nohumanman.com), then you will need some kind of email host to support this.

- 123 reg
    - offers 1 mailbox for £1.99/month
- Microsoft 365
    - £6.99/user/month
- Google Workspace
    - £6/user/month
- fasthosts.com
    - standard email ~£2.40/month/inbox
- self-hosted
    - you could self-host your own mail server, which in my opinion is far too much effort for the cost. There are issues like spam, mailbox size, and most importantly - **server reliability**. Can you afford to lose an email? If you're confident, go for it!

Some of these may be more appealing if web-based email is important for your uses, but if you're just going to use an email client, the main difference will be mailbox size.

