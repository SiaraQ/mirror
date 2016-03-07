 $('#ca').calendar({
        // view: 'month',
        width: 400,
        height: 400,
        // startWeek: 0,
        // selectedRang: [new Date(), null],
        data: [
    {
      date: '2015/12/24',
      value: 'Christmas Eve'
    },
    {
      date: '2015/12/25',
      value: 'Merry Christmas'
    },
    {
      date: '2016/01/01',
      value: 'Happy New Year'
    }
  ],
        onSelected: function (view, date, data) {
            console.log('view:' + view)
            console.log('date:' + date)
            console.log('data:' + (data || 'None'));
        }
    });

    $('#dd').calendar({
        trigger: '#dt',
        // offset: [0, 1],
        zIndex: 999,
        onSelected: function (view, date, data) {
            console.log('event: onSelected')
        },
        onClose: function (view, date, data) {
            console.log('event: onClose')
            console.log('view:' + view)
            console.log('date:' + date)
            console.log('data:' + (data || 'None'));
        }
    });