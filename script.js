
      // Funkcija za izračunavanje potrošnje električne energije
      function racunajPotrosnju() {
        // Učitavamo vrednosti iz input polja
        let kWh = document.getElementById('kWh').value;
        let cenaPoKWh = document.getElementById('cenaPoKWh').value;

        // Pretvaramo vrednosti u brojeve (pošto se učitavaju kao stringovi)
        kWh = parseFloat(kWh);
        cenaPoKWh = parseFloat(cenaPoKWh);

        // Potrošnja se računa kao broj kilovat-časova (kWh) pomnožen sa cenom po kilovat-času (cenaPoKWh)
        let potrosnja = kWh * cenaPoKWh;

        // Ispisujemo rezultat u span elementu sa ID-jem "ukupnaCena"
        document.getElementById('ukupnaCena').innerHTML = potrosnja;
      }

      // Registrujemo funkciju za izračunavanje potrošnje kao event listener na dugme "racunaj"
      document.getElementById('racunaj').addEventListener('click', racunajPotrosnju);
