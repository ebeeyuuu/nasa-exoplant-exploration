import kepler20e from "@/images/kepler-20e.jpg";
import kepler20f from "@/images/kepler-20f.jpg";
import kepler1946c from "@/images/Kepler-1649c.jpg";
import gj504b from "@/images/GJ504b.jpg";
import hr8799b from "@/images/HR8799b.jpg";
import toi700 from "@/images/TOI700.jpg";

export const exoplanetImages = [
  {
    name: "Kepler-20e",
    image: kepler20e,
    primary_description:
      "Kepler-20e is a rocky exoplanet located about 950 light-years away in the constellation Lyra, orbiting the star Kepler-20.",
    lower_secondary_description:
      "This planet is in the habitable zone of its star, but its close orbit means it may be too hot to support life as we know it.",
    upper_secondary_description:
      "Kepler-20e completes its orbit around the star in about 6 days and is part of a multi-planet system discovered by NASA's Kepler mission.",
    lower_secondary_stats: {
      radius: "0.87 Earth radii",
      orbital_period: "6.1 days",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      mass: "0.6 Earths",
    },
    upper_secondary_stats: {
      radius: "0.87 Earth radii",
      orbital_period: "6.1 days",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      mass: "0.6 Earths",
      discovery_year: 2011,
      orbital_radius: "0.0637 AU",
      eccentricity: "< 0.092",
    },
  },
  {
    name: "Kepler-20f",
    image: kepler20f,
    primary_description:
      "Kepler-20f is a super-Earth located in the Kepler-20 system, around 950 light-years away in the constellation Lyra.",
    lower_secondary_description:
      "This planet has a size greater than Earth and lies within the habitable zone, making it an intriguing subject for study.",
    upper_secondary_description:
      "Kepler-20f has an orbital period of approximately 19.6 days and is part of a system with multiple exoplanets.",
    lower_secondary_stats: {
      radius: "1.03 Earth radii",
      orbital_period: "19.6 days",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      mass: "1.1 Earths",
    },
    upper_secondary_stats: {
      radius: "1.03 Earth radii",
      orbital_period: "19.6 days",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      mass: "1.1 Earths",
      discovery_year: 2011,
      orbital_radius: "0.1387 AU",
      eccentricity: "< 0.094",
    },
  },
  {
    name: "Kepler-1649c",
    image: kepler1946c,
    primary_description:
      "Kepler-1649c is a potentially habitable exoplanet located approximately 300 light-years away in the constellation Lyra.",
    lower_secondary_description:
      "This planet has a radius similar to Earth and orbits in its star's habitable zone, where liquid water could exist.",
    upper_secondary_description:
      "Kepler-1649c orbits its star in about 19.5 days and is part of a system that includes another Earth-sized planet.",
    lower_secondary_stats: {
      radius: "1.06 Earth radii",
      orbital_period: "19.5 days",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      mass: "1.06 Earths",
    },
    upper_secondary_stats: {
      radius: "1.06 Earth radii",
      orbital_period: "19.5 days",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      mass: "1.06 Earths",
      discovery_year: 2020,
      orbital_radius: "0.165 AU",
      eccentricity: "< 0.2",
    },
  },
  {
    name: "GJ 504b",
    image: gj504b,
    primary_description:
      "GJ 504b is a gas giant located about 57 light-years away, notable for its striking pink color and low temperature.",
    lower_secondary_description:
      "This young planet is cooler than Jupiter, with methane clouds in its atmosphere that give it a unique pink hue.",
    upper_secondary_description:
      "GJ 504b's low temperature is puzzling for a planet of its size, and scientists continue to study its unusual characteristics.",
    lower_secondary_stats: {
      radius: "1.04 Jupiter radii",
      orbital_period: "5.4 years",
      planet_type: "Gas Giant",
      discovery_method: "Direct Imaging",
      mass: "0.15 Jupiter masses",
    },
    upper_secondary_stats: {
      radius: "1.04 Jupiter radii",
      orbital_period: "5.4 years",
      planet_type: "Gas Giant",
      discovery_method: "Direct Imaging",
      mass: "0.15 Jupiter masses",
      discovery_year: 2013,
      orbital_radius: "0.1 AU",
      eccentricity: "< 0.1",
    },
  },
  {
    name: "HR 8799b",
    image: hr8799b,
    primary_description:
      "HR 8799b is one of the first directly imaged exoplanets, located about 129 light-years away in the constellation Pegasus.",
    lower_secondary_description:
      "This massive planet orbits far from its star, providing a good target for astronomers using direct imaging techniques.",
    upper_secondary_description:
      "HR 8799b is part of a unique planetary system containing three other directly imaged gas giants.",
    lower_secondary_stats: {
      radius: "1.1 Jupiter radii",
      orbital_period: "40 years",
      planet_type: "Gas Giant",
      discovery_method: "Direct Imaging",
      mass: "1.5 Jupiter masses",
    },
    upper_secondary_stats: {
      radius: "1.1 Jupiter radii",
      orbital_period: "40 years",
      planet_type: "Gas Giant",
      discovery_method: "Direct Imaging",
      mass: "1.5 Jupiter masses",
      discovery_year: 2008,
      orbital_radius: "0.7 AU",
      eccentricity: "< 0.1",
    },
  },
  {
    name: "TOI 700 d",
    image: toi700,
    primary_description:
      "TOI 700 d is an Earth-sized exoplanet located in the habitable zone of its star, about 100 light-years away in the constellation Dorado.",
    lower_secondary_description:
      "This planet is roughly the same size as Earth and is in a region where liquid water could potentially exist.",
    upper_secondary_description:
      "TOI 700 d orbits its star in about 37 days and has sparked interest as a target for further study of habitability.",
    lower_secondary_stats: {
      radius: "1.0 Earth radii",
      orbital_period: "37 days",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      mass: "1.0 Earths",
    },
    upper_secondary_stats: {
      radius: "1.0 Earth radii",
      orbital_period: "37 days",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      mass: "1.0 Earths",
      discovery_year: 2020,
      orbital_radius: "0.107 AU",
      eccentricity: "< 0.1",
    },
  },
];
