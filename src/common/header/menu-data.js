const menu_data = [
  {
    id: 1,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    has_dropdown: true,
    title: "Service",
    link: "#",
    sub_menus: [
      { link: "/bedroom-cleaning", title: "Bedroom Cleaning" },
      { link: "/window-cleaning", title: "Window Cleaning" },
      { link: "/office-cleaning", title: "Office Cleaning" },
      { link: "/commercial-cleaning", title: "Commercial Cleaning" },
      { link: "/house-cleaning", title: "House Cleaning" },
      { link: "/car-cleaning", title: "Car Cleaning" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "#",
    sub_menus: [
      { link: "/team", title: "Team" },
      { link: "/team-details", title: "Team Details" },
      { link: "/pricing", title: "Pricing" },
      { link: "/testimonial", title: "Testimonial" },
      { link: "/gallery", title: "Gallery" },
      { link: "/gallery-details", title: "Gallery Details" },
      { link: "/faq", title: "FAQ" },
    ],
  },
  {
    id: 5,
    has_dropdown: true,
    title: "Blog",
    link: "/#",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-grid", title: "Blog Grid" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;