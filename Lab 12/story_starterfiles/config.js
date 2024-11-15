var config = {
    style: 'mapbox://styles/edisonyuzheng/cm2xiymur00er01pc63w39j72',
    accessToken: 'pk.eyJ1IjoiZWRpc29ueXV6aGVuZyIsImEiOiJjbTF0YmZ3b2MwMGxzMmtweHRnamw5Y2trIn0.ExO2dvkfY0gRsPxIxcQZ4w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Flooding in NYC',
    subtitle: '2050 and 2100 predicted floodplains',
    byline: 'By a Digital Storyteller',
    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies facilisis luctus. Nulla imperdiet orci vel nisl laoreet, et finibus eros placerat. Etiam lacus mi, scelerisque id nunc non, interdum facilisis purus. Duis lorem lacus, lacinia a varius sit amet, ullamcorper at augue. Praesent quis libero id libero porta sollicitudin. Nam ultrices nisl est, ut eleifend dolor commodo hendrerit. Donec nec fermentum tortor. Morbi eget rhoncus felis, eu convallis lectus. Proin eleifend neque eu leo pulvinar sollicitudin. Suspendisse facilisis tincidunt ultricies. Quisque placerat gravida placerat. Quisque commodo condimentum euismod. Curabitur ac turpis ligula. Nunc sed maximus ligula",
    para2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies facilisis luctus. Nulla imperdiet orci vel nisl laoreet, et finibus eros placerat. Etiam lacus mi, scelerisque id nunc non, interdum facilisis purus. Duis lorem lacus, lacinia a varius sit amet, ullamcorper at augue. Praesent quis libero id libero porta sollicitudin. Nam ultrices nisl est, ut eleifend dolor commodo hendrerit. Donec nec fermentum tortor. Morbi eget rhoncus felis, eu convallis lectus. Proin eleifend neque eu leo pulvinar sollicitudin. Suspendisse facilisis tincidunt ultricies. Quisque placerat gravida placerat. Quisque commodo condimentum euismod. Curabitur ac turpis ligula. Nunc sed maximus ligula",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flooding',
            image: 'https://static01.nyt.com/images/2023/09/29/multimedia/29ny-storm-infrastructure-02-mltc/29ny-storm-infrastructure-02-mltc-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale',
            description: 'New York City is increasingly vulnerable to severe flooding events due to climate change and aging infrastructure. This image captures the struggle to manage rising waters during intense storms, highlighting the urgent need for resilient infrastructure and flood mitigation strategies to protect residents and critical assets. As heavy rainfall overwhelms stormwater systems, areas across the city face the threat of inundation, emphasizing the importance of adapting urban planning to address climate-driven challenges.',
            location: {
                center: [-73.99186, 40.73454],
                zoom: 12.22,
                pitch: 29.49,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            
            onChapterEnter: [
                
    
            ],
            onChapterExit: [
               
            ]
        },


        {
    id: 'interlude',
    alignment: 'center',
    hidden: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-73.97615, 40.71901],
      zoom: 14.84,
      pitch: 48,
      bearing: 142.44,
    },
},


        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Flood-related damages to the Red Hook Houses',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGJ9ak3xlOiZl2kqAz0J_-jYYgp8RWu8HdQ&s',
            description: 'Red Hook Houses, one of New York City’s largest public housing developments, has faced extensive flood-related damages due to rising sea levels and severe storms. During extreme weather events, the aging infrastructure is vulnerable to water intrusion, resulting in damaged facilities, compromised utilities, and increased repair costs. These recurring damages not only impact the physical structures but also disrupt the lives of residents, underscoring the need for resilient upgrades and comprehensive flood mitigation strategies to safeguard this vital community.',
            location: {
                center: [-74.01039, 40.68003], 
                zoom: 17.21,
                pitch: 45.00,
                bearing: -40.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Fourth Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
