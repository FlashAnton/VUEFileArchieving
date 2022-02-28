Vue.component('archiving',
{
    template: '#archiving',

    methods:
    {
        back: function()
        {
            myVueFileReader.selPage = 'direct';
        }
    }
})
