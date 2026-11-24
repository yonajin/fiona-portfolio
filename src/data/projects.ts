import type { Project } from '../types'

const CM = '/projects/cable-manager'
const JP = '/projects/jonathan-photography'
const UE = '/projects/u-eat'

/**
 * Projects shown in the Projects section.
 *
 * - `featured: true` projects get the large cards.
 * - Add real repository / demo URLs to `links`. Empty arrays show
 *   "Links available on request" instead of a broken link.
 * - Screenshots live in /public/projects/<project-id>/. `image` is the card
 *   preview; `gallery` holds extra screenshots for the details modal.
 *   Export each as .webp at its native width plus a "-720.webp" copy
 *   (set as `srcSmall`), and give `width`/`height` of the full-size file.
 *   Only use real captures of the app — projects without `image` show the
 *   typographic placeholder.
 */
export const projects: Project[] = [
  {
    id: 'cable-manager',
    number: '01',
    title: 'Cable Manager',
    tagline: 'A Cable and Internet Service Management System',
    context: 'Thesis Project',
    role: 'Front-end Developer & Documentation',
    summary:
      'A management system that supports cable and internet service operations — subscribers, billing, payment monitoring, and administration — with an Android app for subscribers.',
    description: [
      'Cable Manager is a management system designed to support cable and internet service operations, including subscriber management, billing, payment monitoring, administrative functions, and an Android application for subscribers.',
      'I worked on the web-based administration system and the Android application, implementing PHP/MySQL APIs and building Kotlin and Jetpack Compose interfaces for billing monitoring, notifications, payment tracking, and analytics. I also handled the project documentation.',
    ],
    highlights: [
      'Web-based administrative system',
      'Android subscriber application',
      'Billing and payment management',
      'Database management',
      'System testing and validation',
    ],
    technologies: ['PHP', 'JavaScript', 'SQL', 'MariaDB / MySQL', 'Kotlin', 'Jetpack Compose', 'Android'],
    links: [
      // { label: 'Repository', href: 'https://github.com/yonajin/REPLACE-ME' },
    ],
    featured: true,
    // Screenshots taken from the Cable Manager thesis manuscript (Chapter IV figures). Sample/test data only.
    image: {
      src: `${CM}/cable-manager-admin-dashboard.webp`,
      srcSmall: `${CM}/cable-manager-admin-dashboard-720.webp`,
      width: 1320,
      height: 730,
      alt: 'Cable Manager admin dashboard showing pending requests, payments waiting to be recorded, low-stock inventory, and a subscriber status summary.',
      caption: 'Admin & staff dashboard',
    },
    gallery: [
      {
        src: `${CM}/cable-manager-subscriber-management.webp`,
        srcSmall: `${CM}/cable-manager-subscriber-management-720.webp`,
        width: 1322,
        height: 729,
        alt: 'Subscriber Management table listing subscribers with account ID, service area, plan, status, and outstanding balance, with search and filters.',
        caption: 'Subscriber management',
      },
      {
        src: `${CM}/cable-manager-billing-management.webp`,
        srcSmall: `${CM}/cable-manager-billing-management-720.webp`,
        width: 1319,
        height: 729,
        alt: 'Billing Management page with the Generate Bills dialog open, selecting a billing month for active subscribers.',
        caption: 'Billing management: generating monthly bills',
      },
      {
        src: `${CM}/cable-manager-analytics-dashboard.webp`,
        srcSmall: `${CM}/cable-manager-analytics-dashboard-720.webp`,
        width: 1320,
        height: 730,
        alt: 'Analytics dashboard with total collected, outstanding balance, collection rate, monthly collections and subscriber growth charts.',
        caption: 'Analytics dashboard',
      },
      {
        src: `${CM}/cable-manager-billing-reports.webp`,
        srcSmall: `${CM}/cable-manager-billing-reports-720.webp`,
        width: 1318,
        height: 732,
        alt: 'Billing Reports page comparing monthly billed and collected amounts in a bar chart and table.',
        caption: 'Financial / billing reports',
      },
      {
        src: `${CM}/cable-manager-subscriber-portal-home.webp`,
        srcSmall: `${CM}/cable-manager-subscriber-portal-home-720.webp`,
        width: 1318,
        height: 732,
        alt: 'Subscriber home page showing outstanding balance, current plan, internet speed test, and the payment center for the current bill.',
        caption: 'Subscriber portal: home & payment center',
      },
    ],
    gallerySections: [
      {
        // Real screenshots of the Kotlin / Jetpack Compose app, from the after-defense
        // thesis manuscript, Chapter IV (Figures 4.38–4.49). Sample/test data only.
        title: 'Android Subscriber Application',
        layout: 'portrait',
        images: [
          {
            src: `${CM}/android/cable-manager-android-sign-in.webp`,
            srcSmall: `${CM}/android/cable-manager-android-sign-in-460.webp`,
            smallWidth: 460,
            width: 921,
            height: 2047,
            alt: 'Android app sign-in screen with the MUÑOZ logo, account number and password fields, and a Forgot your password link.',
            caption: 'Sign in', // Figure 4.38
          },
          {
            src: `${CM}/android/cable-manager-android-home.webp`,
            srcSmall: `${CM}/android/cable-manager-android-home-460.webp`,
            smallWidth: 460,
            width: 921,
            height: 2047,
            alt: 'Android app home screen greeting the subscriber, with balance, plan speed, connection status, a monthly bills chart, and the bottom navigation bar.',
            caption: 'Home', // Figure 4.40
          },
          {
            src: `${CM}/android/cable-manager-android-account-details-support.webp`,
            srcSmall: `${CM}/android/cable-manager-android-account-details-support-460.webp`,
            smallWidth: 460,
            width: 921,
            height: 2047,
            alt: 'Lower part of the Android home screen showing account details and support options to report a problem, chat, or email the office.',
            caption: 'Account details & support', // Figure 4.41
          },
          {
            src: `${CM}/android/cable-manager-android-payment-history.webp`,
            srcSmall: `${CM}/android/cable-manager-android-payment-history-460.webp`,
            smallWidth: 460,
            width: 921,
            height: 2047,
            alt: 'Android Payment History screen with total paid, on-time rate, filters, a paid November 2026 bill, and a Download statement button.',
            caption: 'Payment history', // Figure 4.43
          },
          {
            src: `${CM}/android/cable-manager-android-bill-receipt.webp`,
            srcSmall: `${CM}/android/cable-manager-android-bill-receipt-460.webp`,
            smallWidth: 460,
            width: 921,
            height: 2047,
            alt: 'Android bill detail screen showing the billed amount, account, billing and due dates, payment method, and options to save or send the receipt.',
            caption: 'Bill details & receipt', // Figure 4.44
          },
          {
            src: `${CM}/android/cable-manager-android-connection-test.webp`,
            srcSmall: `${CM}/android/cable-manager-android-connection-test-460.webp`,
            smallWidth: 460,
            width: 921,
            height: 2047,
            alt: 'Android Connection screen with an internet speed gauge and tests for response, download, and upload to the internet and to the office system.',
            caption: 'Connection test', // Figure 4.45
          },
        ],
      },
    ],
  },
  {
    id: 'know-me',
    number: '02',
    title: 'Know Me',
    tagline: 'A personal profile platform',
    context: 'Web Application',
    // year: 'EDIT',
    // role: 'EDIT',
    summary:
      'A platform where users create and customize pages that show who they are — their interests, favorite music, hobbies, movies, and other personal preferences.',
    description: [
      'Know Me is a personal profile platform where users can create and customize pages showcasing their interests, favorite music, hobbies, movies, and other personal preferences.',
      'It is built with React, Vite, and TypeScript on the front end, with Supabase and PostgreSQL handling authentication, data, file storage, and access policies.',
    ],
    highlights: [
      'User authentication',
      'Profile customization',
      'Database integration',
      'Storage and access policies',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    links: [
      // { label: 'Live site', href: 'https://REPLACE-ME.vercel.app' },
      // { label: 'Repository', href: 'https://github.com/yonajin/REPLACE-ME' },
    ],
    featured: true,
    // Change to 'completed' (or delete this line) when Know Me is finished.
    status: 'in-progress',
  },
  {
    id: 'u-eat',
    number: '03',
    title: 'U-Eat',
    tagline: 'An ordering system for school canteen stalls',
    context: 'Academic Project',
    year: '2025',
    role: 'Front-end Developer',
    summary:
      'An Android ordering app for school canteen stalls, covering customer ordering and order management for stall owners.',
    description: [
      'U-Eat is an Android ordering application developed for school canteen stalls. Customers can place orders, while stall owners manage incoming orders.',
      'The app was tested with 50 users, received a 4.5 / 5 rating for functionality, and earned a grade of 90 / 100 in Software Development.',
      // EDIT: add more details about features or your contributions here.
    ],
    highlights: ['Customer ordering', 'Stall-owner order management', 'Tested with 50 users'],
    technologies: ['Kotlin', 'Firebase', 'Android Studio'],
    links: [],
    featured: false,
    // Screenshots from the U-Eat Click & Dine manuscript, Chapter IV,
    // "The Screenshots of the U-Eat Click & Dine" (Plates 1–18). Screens showing
    // personal phone numbers, emails, or a payment QR code were left out.
    galleryTitle: 'U-Eat Android Application',
    galleryLayout: 'portrait',
    image: {
      src: `${UE}/u-eat-food-details.webp`,
      srcSmall: `${UE}/u-eat-food-details-460.webp`,
      smallWidth: 460,
      width: 922,
      height: 2048,
      alt: 'U-Eat Food Details screen for Tapsilog priced at ₱35.00, with a photo, quantity selector, 3–5 minute preparation time, and Add to Cart and Place Order buttons.',
      caption: 'Food details', // Plate 11
    },
    gallery: [
      {
        src: `${UE}/u-eat-cart.webp`,
        srcSmall: `${UE}/u-eat-cart-460.webp`,
        smallWidth: 460,
        width: 922,
        height: 2048,
        alt: 'U-Eat Cart screen ordering from Don’s Tindahan, with one Tapsilog, its quantity controls, a ₱35.00 total, and a Checkout button.',
        caption: 'Cart', // Plate 12
      },
      {
        src: `${UE}/u-eat-checkout-payment.webp`,
        srcSmall: `${UE}/u-eat-checkout-payment-460.webp`,
        smallWidth: 460,
        width: 922,
        height: 2048,
        alt: 'U-Eat Checkout screen with an optional Water add-on, a ₱47.00 total, estimated preparation time, and GCash or Over the Counter payment methods.',
        caption: 'Checkout and payment method', // Plate 13
      },
      {
        src: `${UE}/u-eat-customer-login.webp`,
        srcSmall: `${UE}/u-eat-customer-login-460.webp`,
        smallWidth: 460,
        width: 922,
        height: 2048,
        alt: 'U-Eat customer login screen with the U-Eat logo, email and password fields, Remember me, Forgot password, and a link to create an account.',
        caption: 'Customer login', // Plate 8
      },
      {
        src: `${UE}/u-eat-my-orders.webp`,
        srcSmall: `${UE}/u-eat-my-orders-460.webp`,
        smallWidth: 460,
        width: 922,
        height: 2048,
        alt: 'U-Eat Orders screen listing the customer’s orders with statuses such as Pending, Rejected, Completed, and Awaiting Payment.',
        caption: 'My orders', // Plate 15
      },
      {
        src: `${UE}/u-eat-stall-orders.webp`,
        srcSmall: `${UE}/u-eat-stall-orders-460.webp`,
        smallWidth: 460,
        width: 922,
        height: 2048,
        alt: 'U-Eat stall owner Orders screen for Don’s Tindahan, with an open/closed toggle, status filters, and order cards marked Completed or Rejected.',
        caption: 'Stall owner: orders', // Plate 3
      },
      {
        src: `${UE}/u-eat-sales-overview.webp`,
        srcSmall: `${UE}/u-eat-sales-overview-460.webp`,
        smallWidth: 460,
        width: 922,
        height: 2048,
        alt: 'U-Eat stall owner Sales Overview with today’s orders and revenue, an orders-over-time chart, and an orders-by-status bar chart.',
        caption: 'Stall owner: sales overview', // Plate 4
      },
      {
        src: `${UE}/u-eat-menu-management.webp`,
        srcSmall: `${UE}/u-eat-menu-management-460.webp`,
        smallWidth: 460,
        width: 922,
        height: 2048,
        alt: 'U-Eat stall owner Menu Management screen listing menu items with prices and availability toggles, plus add-on items.',
        caption: 'Stall owner: menu management', // Plate 6
      },
    ],
  },
  {
    id: 'photography-booking',
    number: '04',
    title: 'Jonathan Photography',
    tagline: 'A photography studio website and booking system',
    context: 'Capstone Project',
    role: 'Developer & Quality Assurance',
    summary:
      'A full-stack studio website with a portfolio, service estimator, availability checker, and booking-request system, plus an admin dashboard for the owners.',
    description: [
      'A full-stack photography studio website with a portfolio, a preliminary service estimator, date-availability checking, and a booking-request system. A protected administration dashboard lets the studio manage bookings, schedules, portfolio content, services, pricing, and website copy.',
      'The prototype was tested with 7 users, including the studio owners, and the client signed an agreement to purchase the finished product. Testing feedback led to password-protected admin access and protected portfolio images.',
    ],
    highlights: [
      'Portfolio, estimator, and booking requests',
      'Admin dashboard with calendar management',
      'Password-protected admin access',
      'User testing with the studio owners',
    ],
    technologies: ['React', 'Vite', 'PHP', 'MySQL'],
    links: [],
    featured: false,
    // Screenshots of the implemented site from the capstone manuscript,
    // "Functional Prototype" plates 16–30.
    image: {
      src: `${JP}/jonathan-photography-homepage-hero.webp`,
      srcSmall: `${JP}/jonathan-photography-homepage-hero-720.webp`,
      width: 1918,
      height: 946,
      alt: 'Jonathan Photography homepage hero with the headline “Stories worth keeping” over a wedding photo, and a Book a Session button in the navigation.',
      caption: 'Public homepage', // Plate 16
    },
    gallery: [
      {
        src: `${JP}/jonathan-photography-homepage-selected-work.webp`,
        srcSmall: `${JP}/jonathan-photography-homepage-selected-work-720.webp`,
        width: 1919,
        height: 944,
        alt: 'Homepage “Selected work” section showing portfolio categories: weddings, engagement, portraits, and events.',
        caption: 'Homepage: selected work gallery', // Plate 16.2
      },
      {
        src: `${JP}/jonathan-photography-homepage-estimate-cta.webp`,
        srcSmall: `${JP}/jonathan-photography-homepage-estimate-cta-720.webp`,
        width: 1917,
        height: 945,
        alt: 'Yellow homepage section reading “Get a clear starting price before the conversation” with a camera illustration and an estimate button.',
        caption: 'Homepage: estimate call to action', // Plate 16.3
      },
      {
        src: `${JP}/jonathan-photography-estimator-summary.webp`,
        srcSmall: `${JP}/jonathan-photography-estimator-summary-720.webp`,
        width: 1918,
        height: 945,
        alt: 'Package estimator with shoot types, coverage hours, and add-ons on the left and a running estimate summary with a price range on the right.',
        caption: 'Estimator: selections and estimate summary', // Plate 20.2
      },
      {
        src: `${JP}/jonathan-photography-booking-request-schedule.webp`,
        srcSmall: `${JP}/jonathan-photography-booking-request-schedule-720.webp`,
        width: 1918,
        height: 945,
        alt: 'Booking request form with an availability calendar for choosing a preferred date, start time and location fields, and the estimate total.',
        caption: 'Booking request: availability calendar', // Plate 21.1
      },
      {
        src: `${JP}/jonathan-photography-admin-calendar.webp`,
        srcSmall: `${JP}/jonathan-photography-admin-calendar-720.webp`,
        width: 1918,
        height: 946,
        alt: 'Admin Calendar page in the dark sidebar dashboard, showing a monthly studio booking calendar with an Add booked work button.',
        caption: 'Admin: booking calendar', // Plate 24
      },
      {
        src: `${JP}/jonathan-photography-admin-services-management.webp`,
        srcSmall: `${JP}/jonathan-photography-admin-services-management-720.webp`,
        width: 1918,
        height: 944,
        alt: 'Admin Services page with an Add a Service form and a list of available services such as Photo Booth and Picture Frames with prices.',
        caption: 'Admin: services management', // Plate 26
      },
    ],
  },
]
