---

title: CSS Tutorial in Hindi
slug: css-tutorial
description: This is all about CSS tutorial
date: 31/02/2025
author: Khushi
image: "https://cdn.shopify.com/s/files/1/0533/2089/files/intro-to-css.jpeg?v=1580838171"

---

# Introduction

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout of multiple web pages all at once. In this tutorial, we will explore the basics of CSS, its syntax, and how to use it effectively.

## Table of Contents
1. [What is CSS?](#what-is-css)
2. [CSS Syntax](#css-syntax)
3. [Selectors](#selectors)
4. [Box Model](#box-model)
5. [Flexbox](#flexbox)
6. [Grid Layout](#grid-layout)
7. [Responsive Design](#responsive-design)
8. [Conclusion](#conclusion)

## What is CSS?

CSS stands for Cascading Style Sheets. It is used to style and layout web pages, including the design of headers, footers, columns, fonts, colors, and spacing. CSS allows you to apply styles to web pages in a consistent manner.

## CSS Syntax

CSS is made up of rules that are applied to HTML elements. A CSS rule consists of a selector and a declaration block. Here’s an example:

```css
h1 {
  color: blue;
  font-size: 24px;
}

What is the difference between HTML and CSS?
HTML and CSS go hand-in-hand in building the web pages we know and love. However, these are distinct languages, and it’s important to understand their different purposes.

HTML (Hypertext Markup Language) determines the contents of a web page, including text, links, images, videos etc. An HTML file lists all of the “things” on a page, but it doesn’t specify how these things look when displayed in a browser.

CSS, as we now know, controls the style of these elements. CSS ensures the HTML contents appear to users the way it was intended by designers.

You might be wondering: Why separate these two languages? It’s a reasonable question, since HTML and CSS work together. The answer is that separating style and content makes developing websites much, much easier.

A brief history lesson: When HTML was first introduced in the 1990s, styling was much less of a consideration — the focus was more on just presenting information on a web page. Once developers had that down, the next step was adding rudimentary visual embellishments like colors and fonts.

The first implementation of HTML styling was special HTML tags and attributes that would affect how the text looked. This tacked-on solution worked, but it was far from ideal for designers, especially as websites grew. Those building large online properties had to apply styling to every page element within each HTML file.

You can imagine how this would become a tad maddening. Hence, CSS was created to style HTML without having to change the HTML files directly. Since then, there have been several updates to CSS that add new capabilities — the current standard is CSS3.

Benefits of CSS
As it turns out, there are multiple benefits to separating content code from style code. These include:

Less coding: Developers can use CSS to apply the same styling to multiple pages and page elements across a website, saving huge amounts of time and reducing the chance of errors. Modifying a site-wide style requires changing just a snippet of code.
More styling options: You can do a lot with CSS, much more than was permitted by the original HTML styling system. With a clear vision, CSS know-how, and some patience, you can customize a website exactly to your preference.
Standardization: Since CSS is the uniform language for styling web pages, a developer or designer can understand the styling for any website by looking at the CSS files.
Better performance: CSS reduces the amount of repetitive styling code. Less code means smaller files, and smaller files mean faster page load times.
How to Write CSS
We’ve explored why the CSS language does and why it’s important (other than what “cascading” means — we’ll get there, trust me). Now, let’s code some.

Those familiar with HTML will notice that CSS syntax looks a little different. Instead of listing page content, CSS lists the style rules that are assigned to HTML elements, an entire HTML document, or even multiple HTML documents. These rules are processed by the web browser loading the HTML file.

A rule in CSS looks like this:

a diagram of a typical CSS rule
You’ll notice four main components: a selector, declarations, properties, and values. Let’s break down each of these.

What is a CSS Selector?
A CSS rule always begins with a selector. The selector indicates the part of the document where the rule is applied. When processing CSS code, the browser uses the selector to “select” the targeted elements and apply style rules to them. The selector is followed by one or more declarations inside curly braces.

There are a handful of ways to write a selector. The most basic type of CSS selector is the element selector, used in the example above. The element selector targets HTML elements by their names (e.g., p, span, div, a):


It is also possible to target an element by its class or id attribute. The class selector is written as a period (.) followed by the class name. The id selector is written as a hash (#) followed by the id name.


To target a specific child element within a parent element, write the selector as the parent element, followed by the child element (with a space in between):


You can even assign the same rule to multiple elements with the grouping selector. The grouping selector comprises two or more element names separated by commas. Order is not important in the grouping selector — the rule will be applied to all listed elements:


You’ll see these basic selectors all over CSS files, but there are even more selector types that let you target page elements in various ways. To learn more about them, see our guide to CSS selectors.

What is a CSS declaration?
After the selector comes the declaration block, a pair of curly braces containing one or more CSS declarations. A CSS declaration tells the browser how to style the selected element — it consists of a property and a value.

Each declaration ends with a semicolon. Though not required, it’s common to place each declaration on a new line. This practice makes CSS declaration blocks easier for humans to read.

What is a CSS property?
As the first part of a CSS declaration, a CSS property tells the browser what style feature of the element should be changed. There are many CSS properties that affect different things. For example, a property can target an element’s color, size, font, shape, or location on the page. A property is always paired with at least one value. A property and its value(s) are separated by a colon.

Before we talk about values, one important note: For a declaration to take effect, the browser must recognize the property of the declaration. Unfortunately, just because a CSS property exists doesn’t mean it works in every browser. When new properties are introduced, web browsers need to implement them, and some browsers are faster to adopt new CSS features than others.