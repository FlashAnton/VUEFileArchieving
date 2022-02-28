Vue.component('firstPage',
{
    template: '#firstPage',

    methods:
    {
        writefile: function ()
        {
            let content = document.getElementById('fileOutput').innerText;
            let name =  document.getElementById('fileName').innerText;
            let expansion = document.getElementById('fileExpansion').innerText;

            let blob = new Blob([content]);
            let url = URL.createObjectURL(blob);
            function download(url, name){
                let a = document.createElement("a");
                a.download = name;
                a.href = url;
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
            download(url, name + '.' + expansion);
            URL.revokeObjectURL(url);
        },

        readfile: function (e)
        {
            let file = e.target.ownerDocument.getElementById('fileInput').files[0];
            let reader = new FileReader();
            reader.onload = function (en) {
                let output = document.getElementById("fileOutput");
                output.textContent = en.target.result;
            };
            reader.readAsText(file);
        },

        readerButton: function()
        {
            let fileInput = document.getElementById('fileInput');
            fileInput.click();
        },

        next: function()
        {
            myVueFileReader.selPage = 'direct';
        }
    }
})
