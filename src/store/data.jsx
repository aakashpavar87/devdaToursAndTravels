import { ArrowRightLeft } from "lucide-react";

export const initialState = {
  mainRoutes: [
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> BHILWADA
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-bhilwada",
      subRoutes: ["Himmatnagar", "Udaipur", "Nathdwara", "Chittorgadh"],
      region: "bhilwara-rj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> DELHI
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-delhi",
      subRoutes: ["Ajmer", "Jaipur", "Kota"],
      region: "delhi",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> BANSWADA
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-banswada",
      subRoutes: ["Modasa", "Dungarpur", "Sagvada"],
      region: "banswada-rj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> SAABLA
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-saabla",
      subRoutes: ["Aaspur", "Salumbar"],
      region: "saabla-rj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> MOUNT. ABU
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-mtabu",
      subRoutes: ["Mehsana", "Patan", "Palanpur", "Disa", "Abu Road"],
      region: "mtabu-rj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> JODHPUR
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-jodhpur",
      subRoutes: ["Jhalor", "Sirohi", "Bhinmal", "Pali"],
      region: "jodhpur-rj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> KHATU SHYAMJI
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-khatushyamji",
      subRoutes: ["Revdar", "Dhanera", "Saachor"],
      region: "khatushyamji-rj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> SOMNATH
        </p>
      ),
      description:
        "A technology company that builds economic infrastructure for the internet.",
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-somnath", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Chotila", "Rajkot", "Jetpur", "Junagadh", "Porbandar"],
      region: "saurashtra-gj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> AASHAPURA MATA NO MADH
        </p>
      ),
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-aashapuramatamadh", // Lowercase conversion and kebab-case for slug
      subRoutes: [
        "Dhanghadhra",
        "Surendranagar",
        "Malia",
        "Bhachau",
        "Gandhidham",
        "Bhuj",
      ],
      region: "north-gj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> DWARKA
        </p>
      ),
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-dwarka", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Morbi", "Jamnagar"],
      region: "west-gj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> SARANGPUR HANUMAN TEMPLE
        </p>
      ),
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-sarangpurtemple", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Bhavnagar", "Palitana", "Diu"],
      region: "saurashtra-gj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> KEVDIA COLONY (STATUE OF UNITY)
        </p>
      ),
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-kevadiya", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Baroda", "Nadiad", "Anand"],
      region: "middle-gj",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> MUMBAI
        </p>
      ),
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      sedan: 3499,
      suv: 4499,
      slug: "ahmedabad-to-mumbai", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Bharuch", "Surat", "Daman", "Vapi"],
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> NAGPUR
        </p>
      ),
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-nagpur", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Mumbai", "Pune", "Nasik"],
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> RATLAM
        </p>
      ),
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-ratlam", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Dakor", "Godhra", "Dahod", "Indore"],
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> UJJAIN
        </p>
      ),
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      sedan: 6499,
      suv: 8499,
      slug: "ahmedabad-to-ujjain", // Lowercase conversion and kebab-case for slug
      subRoutes: ["Bhopal", "Nimach"],
    },
  ],
  subRoutes: [
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> MUMBAI
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-mumbai",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> PUNE
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-pune",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> NASIK
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-nasik",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> HIMMATNAGAR
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-himmatnagar",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> UDAIPUR
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-udaipur",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> NATHDWARA
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-nathdwara",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> CHITTORGADH
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-chittorgadh",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> KOTA
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-kota",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> JAIPUR
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-jaipur",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> AJMER
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-ajmer",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> DUNGARPUR
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-dungarpur",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> SAGVADA
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-sagvada",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> MODASA
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-modasa",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> AASPUR
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-aaspur",
    },
    {
      title: (
        <p className="flex flex-col md:flex-row gap-3">
          AHMEDABAD <ArrowRightLeft /> SALUMBAR
        </p>
      ),
      sedan: 0,
      suv: 0,
      slug: "ahmedabad-to-salumbar",
    },
    {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> MEHSANA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-mehsana"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> PATAN
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-patan"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> PALANPUR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-palanpur"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> DISA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-disa"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> ABU ROAD
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-abu-road"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> JHALOR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-jhalor"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> SIROHI
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-sirohi"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> BHINMAL
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-bhinmal"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> PALI
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-pali"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> REVDAR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-revdar"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> DHANERA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-dhanera"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> SAACHOR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-saachor"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> CHOTILA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-chotila"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> RAJKOT
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-rajkot"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> JETPUR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-jetpur"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> JUNAGADH
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-junagadh"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> PORBANDAR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-porbandar"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> DHANGHADHRA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-dhanghadhra"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> SURENDRANAGAR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-surendranagar"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> MALIA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-malia"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> BHACHAU
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-bhachau"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> GANDHIDHAM
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-gandhidham"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> BHUJ
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-bhuj"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> MORBI
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-morbi"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> JAMNAGAR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-jamnagar"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> BHAVNAGAR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-bhavnagar"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> PALITANA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-palitana"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> DIU
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-diu"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> BARODA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-baroda"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> NADIAD
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-nadiad"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> ANAND
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-anand"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> BHARUCH
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-bharuch"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> SURAT
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-surat"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> DAMAN
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-daman"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> VAPI
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-vapi"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> DAKOR
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-dakor"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> GODHRA
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-godhra"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> DAHOD
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-dahod"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> INDORE
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-indore"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> BHOPAL
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-bhopal"
      },
      {
        title: (
          <p className="flex flex-col md:flex-row gap-3 capitalize">
            AHMEDABAD <ArrowRightLeft /> NEEMACH
          </p>
        ),
        sedan: 0,
        suv: 0,
        slug: "ahmedabad-to-nimach"
      }
  ],
};
