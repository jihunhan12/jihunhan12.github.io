// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Research Overview &amp; Projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Lab Members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses at KAIST",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-news-amp-gallery",
          title: "News &amp; Gallery",
          description: "Updates &amp; Lab Life",
          section: "Navigation",
          handler: () => {
            window.location.href = "/newsNgallery/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Join Us and Ask Us",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-professor-jihun-han-officially-joined-kaist-as-of-today",
          title: 'Professor Jihun Han officially joined KAIST as of today!!',
          description: "",
          section: "News",},{id: "projects-intelligent-vehicle-amp-mobility-validation-framework",
          title: 'Intelligent Vehicle &amp;amp; Mobility Validation Framework',
          description: "Jul 1, 2026 - Dec 31, 2029, Sponsored by KAIST (정착연구과제)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "teachings-dynamics",
          title: 'Dynamics',
          description: "Based on Newton&#39;s law, we learn the relationship between force and motion, work, and energy, and impulse and momentum. Student will develop quantitative analysis methods through practical problems. To describe motion, various kinematic systems will be explored.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
