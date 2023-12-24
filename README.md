<p align="center"><img src="https://github.com/seyyidmcelik/photos/blob/main/invoice-app/laravel-vue.png" width="400" alt="Laravel Vue Logo"></p>

# Invoice Generator App

## Overview

The Invoice Generator App is a web application built using Laravel and Vue.js. It allows users to easily generate professional invoices for their business transactions.

## Features

- **User Authentication**: Secure login and registration system for users.
- **Invoice Creation**: Create and customize professional-looking invoices.
- **Client Management**: Manage client information for quick invoicing.
- **Invoice History**: Keep track of past invoices for reference.
- **PDF Export**: Download invoices in PDF format for easy sharing and printing.

## Prerequisites

- [Composer](https://getcomposer.org/) for Laravel dependencies.
- [Node.js](https://nodejs.org/) for Vue.js dependencies.
- [XAMPP](https://www.apachefriends.org/tr/index.html) for apache server and mysql

## Installation

   ```
   git clone https://github.com/your-username/invoice-generator.git
   ```

#### Install Laravel dependencies

```
cd invoice-generator
composer install
```

#### Install Vue.js dependencies

```
npm install
```

#### Copy the .env.example file to .env and configure your database settings

```
cp .env.example .env
```

#### Generate the application key

```
php artisan key:generate
```

#### Run database migrations

```
php artisan migrate
```

#### Start the development server

```
php artisan serve
```

#### And in a separate terminal

```
npm run dev
```

## Usage

1. Navigate to the "Invoices" section to create a new invoice.
2. Fill in the necessary details, including client information and line items.
3. Save and/or export the invoice as a PDF.
