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

            tmp = file.name.split('.');
            name = tmp[0];
            expansion = tmp[1];

            document.getElementById('fileName').innerText = name;
            document.getElementById('fileExpansion').innerText = expansion;

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

        createZip: function()
        {
            zip.generateAsync({type:"base64"})
            .then(function (content) {
                location.href="data:application/zip;base64,"+content;
            });
        },

        addZip: function()
        {
            let content = document.getElementById('fileOutput').innerText;
            let name =  document.getElementById('fileName').innerText;
            let expansion = document.getElementById('fileExpansion').innerText;

            zip.file(name + '.' + expansion, content);

            let list = document.getElementById('result');
            let block = document.createElement('div');
            block.id = 'resultBlock';
            if (document.getElementById('resultBlock') != null)
            {
                block = document.getElementById('resultBlock');
                let li = document.createElement('li');
                li.innerHTML = name + '.' + expansion;
                block.appendChild(li);
            }
            else
            {
                list.appendChild(block);
                block = document.getElementById('resultBlock');
                let li = document.createElement('li');
                li.innerHTML = name + '.' + expansion;
                block.appendChild(li);
            }
        },

        clearZip: function()
        {
            zip = new JSZip();
            let list = document.getElementById('resultBlock').remove();
        },

        next: function()
        {
            myVueFileReader.selPage = 'direct';
        }
    }
})
