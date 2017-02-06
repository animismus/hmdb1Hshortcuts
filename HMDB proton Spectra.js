// Find all anchors
var ancs = document.getElementsByTagName("a");
// holder for the 1H spectra links
var spectra = [];
// the shortcut bar already in place
var bardiv = document.getElementsByClassName("metabolite affix-top")[0];

// check if the link is of the desired kind
for (var idx= 0; idx < ancs.length; idx++) { 
    var anc_text = ancs[idx].innerText;
    if (anc_text == "1H NMR Spectrum") { 
        spectra.push(ancs[idx]); 
    }
}


// create a container for the links
var ancsdiv = document.createElement('div');
ancsdiv.className = 'section-jumps';

// stick the links in the container
for (var idx = 0; idx < spectra.length; idx++)
{
    spectra[idx].className = 'btn-jump'; 
    ancsdiv.appendChild(spectra[idx]);
}

// stick the container in the bar
bardiv.appendChild(ancsdiv);