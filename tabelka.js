function książka(id, tytul, autor, strony) {
    this.id = id;
    this.autor = autor;
    this.tytul = tytul;
    this.strony = strony;

}

const tab_prac = new Array();
tab_prac[0] = new książka(1, "George Orwell", "1984", "328");
tab_prac[1] = new książka(2, "Paulo Coelho", "Alchemik", "256");
tab_prac[2] = new książka(3, "Hanya Yanagihara", "Małe życie", "816");
tab_prac[3] = new książka(4, "Brinkmann Svend", "Jak był człowiekiem?", "288");
tab_prac[4] = new książka(5, "Parenti Chiara", "Sztuka sięgania gwiazd", "400");
tab_prac[5] = new książka(6, "Kiyosaki Robert", "Bogaty Ojciec, Biedny Ojciec", "344");
tab_prac[6] = new książka(7, "Maciej Frączyk", "Na południe od nieba", "136");
tab_prac[7] = new książka(8, "Owens Delia", "Gdzie śpiewają raki", "416");
tab_prac[8] = new książka(9, "Zafon Carlos Ruiz", "Cień wiatru", "520");
tab_prac[9] = new książka(10, "Fiodor Dostojewski", "Zbrodnia i Kara", "374");
tab_prac[10] = new książka(11, "Joseph Heller", "Paragraf 22", "480");
tab_prac[11] = new książka(12, "Khaled Hosseini", "Chłopiec z latawcem", "416");
tab_prac[12] = new książka(13, "Ernest Hemingway", "Słońce też wschodzi", "256");



function wyswietlTabele(tab) {
    let txt = "";
    txt += "<tr>";
    txt += "<th>Lp.</th>";
    txt += "<th>Nazwa książka</th>";
    txt += "<th>Autor</th>";
    txt += "<th>Ilość stron</th>";
    txt += "</tr>";
    for (var i = 0; i < tab.length; i++) {
        txt += "<tr>";
        txt += "<td>" + tab[i].id + "</td>"
        txt += "<td>" + tab[i].autor + "</td>"
        txt += "<td>" + tab[i].tytul + "</td>"
        txt += "<td>" + tab[i].strony + "</td>"
        txt += "</tr>";
    }
    let elemTab_HTML = document.getElementById("tabela");
    elemTab_HTML.innerHTML = txt;
}