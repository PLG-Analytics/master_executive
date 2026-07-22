# Master Executive Report

## Purpose

The Master Executive Report is a Qlik Cloud embedded analytics application that provides inventory, performance, and operational reporting across multiple practice areas.

The application is built using Qlik Web Components and supports interactive dashboard experiences through embedded Qlik objects.

---

## Data Sources

- Litify
- Case Xchange

---

## Architecture

### Front-End

- HTML5
- JavaScript
- CSS

### Analytics Platform

- Qlik Cloud
- Qlik Web Components

### Authentication

- OAuth 2.0
- Qlik Web Integration

---

## Application Structure

### Landing Page

Provides report documentation, report inventory, and navigation to available dashboards.

### Executive Overview

Provides:

- Performance reporting
- Inventory KPIs
- Funnel analytics
- Department-level operational metrics

### Inventory Reports

Provides:

- Front Office Inventory (FOH)
- Back Office Inventory (BOH)
- Workload distribution
- Inventory comparison reporting

---

## Data Context

The Executive Overview dashboard includes a Data Context modal for business-specific reporting notes and assumptions. Assumptions/context necessary for proper interpretation of the charts should be added here. This currently exists only on the Executive Overview (aka Jumbotron) page.

---

## Key Technical Features

- Embedded Qlik Cloud visualizations
- Session-based chart rendering
- OAuth-secured access
- Dynamic object loading
- Multi-page dashboard architecture
- Re-rendering of dashboard sessions during filter resets

---

## Ownership

### Analytics Team

**Megha Patel**  
mpatel@pondlehocky.com

**Kevin Doyle**  
kdoyle@pondlehocky.com

---

## Dependencies

- Qlik Web Components (`@qlik/embed-web-components`)
- Qlik Cloud OAuth Authentication
- Shared utility library (`utils.js`)
- Shared stylesheet (`styles.css`)
