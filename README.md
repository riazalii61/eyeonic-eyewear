# Eyeonic Eyewear

I built Eyeonic as my eProject after six months of learning web development at Aptech. It is a responsive eyewear catalog where visitors can browse ten products, examine a frame up close, and compare two products side by side before choosing a style.

![Amber tortoiseshell sunglasses from the Eyeonic collection](images/hero-eyewear.webp)

## Try the catalog

Open **Categories** and choose **Sunglasses**. Open **Details** on the Ray-Ban Classic Aviator to inspect its frame and lenses, or choose **Specs** to download its Word specification sheet. On **Compare Products**, select the Classic Aviator and Oakley Sport Pro to see their photos, prices, materials, lens types, and warranties in the same table.

## Pages

| Page | What you can do |
| --- | --- |
| Home | Explore featured brands, browse five eyewear categories, and open product details. |
| Brands | Filter the catalog by a featured brand or search the product cards by name, brand, or category. |
| Categories | Browse frames, sunglasses, contact lenses, computer glasses, and reading glasses. |
| Compare Products | Choose two different products and compare their specifications side by side. |
| About | Read the demo store’s story and explore its photo gallery. |
| Contact | View the Karachi map and try the contact form’s field validation. |

## Run locally

Download or clone the repository. Open `index.html` in your browser. To run it through a local web server on Windows, open a terminal in the project folder and run the following command.

```powershell
py -m http.server 8000
```

Open `http://localhost:8000`. On macOS or Linux, use `python3 -m http.server 8000`. The project includes its images and Word documents. Bootstrap, Bootstrap Icons, Google Fonts, and the embedded map use an internet connection.

## How it works

The six HTML pages share `css/style.css` and `js/app.js`. Bootstrap 5.3.2 provides the responsive grid and product dialogs. One JavaScript array supplies the product cards, search results, and comparison table. The theme switch saves the visitor’s light or dark preference in the browser’s local storage.

To update a product, edit its entry in `js/app.js`, its photo in `images/products/`, and its downloadable sheet in `docs/`. The contact and newsletter forms demonstrate browser-side validation and display their feedback locally.

## What I learned at Aptech

Building Eyeonic helped me connect HTML, CSS, and JavaScript across several pages. One practical lesson was how to reuse data. A product’s price appears on its card and in the comparison table, so reading both from the same record keeps them consistent. I also practiced responsive layouts, handling click and input events, and checking that category buttons show the expected products.

**Riaz Ali** · Aptech student eProject. The catalog details, store story, and customer testimonials are sample content. The product, store, and customer images are AI-generated illustrations for the project.
