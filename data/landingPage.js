window.contentLandingPage = [
  { module: "TitleWithRegisterForm",
    contents: {
      title: "Erleben Sie jetzt die grenzenlose Welt von Stage Entertainment.",
      text:
        "Werden Sie Teil einer Community, die alles, was auf der Bühne passiert, liebt. Finden Sie die passendem Angebote für sich selbst, teilen Sie Ihre Leidenschaft mit Freunden und profitieren Sie von einmaligen und exklusiven Aktionen.",
      formTitle: "Registrieren Sie sich jetzt. Kostenlos.",
      buttonAdditionalText: 'Per Klick auf "Jetzt Mitglied werden" stimmen Sie unseren AGB und Datenschutzrichtlinien zu.',
      buttonText: "Jetzt Mitglied werden"
    },
    pictures: {
      background: {
        src: "https://source.unsplash.com/6CTgu2lP_c0/1920x638",
        positionX: "50%",
        positionY: "50%"
      },
      motiv: {

      }
    },
    inputFields: [
      {
        inputType: "text",
        label: "Vor- und Nachname"
      },
      {
        inputType: "email",
        label: "E-Mail Adresse"
      },
      {
        inputType: "password",
        label: "Passwort vergeben"
      },
      {
        inputType: "password",
        label: "Passwort wiederholen"
      }
    ]
  },
  { module: "KeyFeatures",
    features: [
      {
        title: "Exklusive Aktionen",
        text: "Entdecken Sie die ganze Welt von Stage Entertainment. Und das alles zu exklusiven Sonderkonditionen.",
        icon: "euro_symbol",
        button: {
          text: "Jetzt registrieren",
          url: "#register-form"
        }
      },
      {
        title: "Mit Freunden teilen",
        text: "Ein Erlebnis möchte selten für sich behalten werden. Teilen Sie Ihre besten Momente mit Freunden, die Ihre Leidenschaft teilen.",
        icon: "group",
        button: {
          text: "Jetzt registrieren",
          url: "#register-form"
        }
      }
    ]
  },
  { module: "SlideStatement",
    title: "Willkommen in Ihrer persönlichen Welt des Entertainments.",
    background: {
      src: "https://source.unsplash.com/Q14J2k8VE3U/1544x1024",
      positionX: "50%",
      positionY: "90%"
    }
  }
];
