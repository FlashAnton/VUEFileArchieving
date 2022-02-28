Vue.component('direct',
{
    template: '#direct',

    methods:
    {
        next: function()
        {
            myVueFileReader.selPage = 'archiving';
        },

        back: function()
        {
            myVueFileReader.selPage = 'firstPage';
        }
    }
})
