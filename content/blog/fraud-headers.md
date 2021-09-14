---
title: "Collecting HMRC fraud protection headers data with PHP"
date: 2021-09-12T14:39:05+02:00
draft: true
---

Validate, generate and extract data from JMBG (Unique Master Citizen Number).

Hugo provides its own webserver which builds and serves the site. While hugo server is high performance, it is a webserver with limited options. Many run it in production, but the standard behavior is for people to use it in development and use a more full featured server such as Nginx or Caddy.

‘hugo server’ will avoid writing the rendered and served content to disk, preferring to store it in memory.

By default hugo will also watch your files for any changes you make and automatically rebuild the site. It will then live reload any open browser pages and push the latest content to them. As most Hugo sites are built in a fraction of a second, you will be able to save and see your changes nearly instantly.

## Install

Via Composer

``` bash
composer require tesla-software/jmbg
```

## Usage

### Validation
``` php
use Tesla\JMBG\JMBG;

// Check if JMBG is valid
JMBG::for('2509992391801')->isValid(); // Returns: true

// Extract birthday
JMBG::for('2509992391801')->getBirthday(); // Returns: DateTime (1992-09-25)

// Extract gedner (m for males, f for females)
JMBG::for('2509992391801')->getGender(); // Returns: m
```

## External Helper AsciiDoc

AsciiDoc implementation EOLs in Jan 2020 and is no longer supported. AsciiDoc development is being continued under Asciidoctor. The format AsciiDoc remains of course. Please continue with the implementation Asciidoctor.
External Helper Asciidoctor
The Asciidoctor community offers a wide set of tools for the AsciiDoc format that can be installed additionally to Hugo. See the Asciidoctor docs for installation instructions. Make sure that also all optional extensions like

- asciidoctor-diagram or
- sciidoctor-html5s are installed if required.

### Generation
``` php
use Tesla\JMBG\Generator;

$gen = new Generator;

// Returns valid random JMBG
$gen->fake();

// Override params [day, month, year, region, gender]
$gen->fake(25, 9, 992, '57', '321');
```
