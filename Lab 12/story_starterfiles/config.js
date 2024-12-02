var config = {
    style: 'mapbox://styles/edisonyuzheng/cm46ahwan00r901qr6i9vez7g',
    accessToken: 'pk.eyJ1IjoiZWRpc29ueXV6aGVuZyIsImEiOiJjbTF0YmZ3b2MwMGxzMmtweHRnamw5Y2trIn0.ExO2dvkfY0gRsPxIxcQZ4w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'TSMC and Housing Market Dynamics',
    subtitle: 'Zheng Yu',
    byline: 'Regioanl Science MS Student',
    para1: "Since 2020, it has launched several fab construction and expansion plans in response to the chip shortage and the wave of artificial intelligence (AI) development. TSMC’s fab plans have raised widespread public attentions in the housing market, boosting confidence and expectations among market participants.",
    para2: 'Bloomberg has reported that Taiwan’s semiconductor success is fueling a surge in the housing market, with housing prices rising significantly in districts near TSMC sites. Taiwan’s authoritative magazine, Global Views Monthly, also stated that impacted by the AI wave, TSMC has become the center of global attention, and this effect has been gradually spilling over into the housing market, with TSMC becoming a guarantor of housing booms',
    chapters: [
        {
            id: 'did2-67zplc',
            alignment: 'left',
            hidden: false,
            title: 'TSMC',
            image: 'https://static01.nyt.com/images/2024/01/24/multimedia/24kristof-lgtp/24kristof-lgtp-master1050.jpg',
            description: 'Taiwan Semiconductor Manufacturing Company, Limited (TSMC), founded in 1987 by Morris Chang, is a global leader in the semiconductor industry, famous for its advanced chip manufacturing. TSMC specializes in manufacturing chips designed by other companies and has emerged as a pioneer of the dedicated semiconductor foundry model. This model has enabled it to become a central player in the technology industry and to produce a significant portion of the world’s advanced microchips. TSMC became the most valuable company in Asia by market capitalization in 2021,6 and dominated the global semiconductor foundry market with a market share exceeding 60% in 2023, underscoring its leadership in the global industry.',
            location: {
                center: [120.77800, 23.29856],
                zoom: 6.80,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            
             onChapterEnter: [],
    onChapterExit: []
        },


        {
    id: 'interlude',
    alignment: 'left',
    hidden: false,
    description: 'The red is the treatment group and the blue is the control group',
    
    location: {
      center: [120.87776, 23.62741],
                zoom: 8.01,
                pitch: 45.00,
                bearing:0.00
    },
},

       
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'First case: Kaohsiung City',
            image: 'https://i.epochtimes.com/assets/uploads/2024/03/id14194618-667703-600x400.jpg',
            description: 'On September 7, 2021, Taiwan’s well-known CommonWealth Magazine reported that TSMC plans to construct two semiconductor fabrication plants in the Nanzi District of Kaohsiung City. Later, on November 9, 2021, TSMC officially confirmed that the fabs would be equipped with 7 nm and 28 nm technologies. On October 13, 2022, TSMC held an investor conference and announced a reduction in 7 nm production capacity due to weakened customer demand, leading to a delay in the construction of the 7 nm fab in Kaohsiung City. Subsequently, on April 20, 2023, TSMC revealed that its Kaohsiung plant would undergo flexible adjustments, switching from a 28 nm facility to one focused on advanced manufacturing processes, though specific details were not provided. On August 8, 2023, TSMC confirmed that the original 7 nm facility would be upgraded to adopt 2 nm advanced process technology. These fabs are expected to begin mass production in 2025.',
            location: {
                center: [120.30439, 22.70021],
                zoom: 15.52,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Second case: Taichung City',
            image: 'https://images.chinatimes.com/newsphoto/2022-12-28/1024/20221228004821.jpg',
            description: 'On September 2, 2021, senior government officials informed the media that TSMC had plans to expand its fabs in Taichung. The CEO of TSMC visited the Taichung City Government on December 27, 2021, to express the company’s intention to construct a new fab. On December 27, 2023, the Taichung Mayor confirmed that it is almost certain the new factory will be located in Daya District and will implement some of the most advanced processes, potentially below 2 nm.',
            location: {
                center: [120.61051, 24.21115],
                zoom: 15.76,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Thrid case: Taoyuan City',
            image: 'https://images.chinatimes.com/newsphoto/2023-09-18/656/20230918003329.jpg',
            description: 'Online media reported that on October 31, 2022, TSMC launched a new program to implement its latest 1.4 nm process technology in the Longtan District of Taoyuan City, where it already operates a packaging facility. However, the plan encountered several challenges, including issues with acquiring residential properties and land and securing water and electricity supplies. Many landowners protested and refused to sell their land. As a result, TSMC abandoned the plan on October 17, 2023.',
            location: {
                center: [121.18237, 24.88883],
                zoom: 15.23,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'sixth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Empirical Methods',
            image: 'https://i.imgur.com/ZDXXVNh.png',
           
            location: {
                center: [120.87776, 23.62741],
                zoom: 8.01,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'First case: Kaohsiung City',
            image: 'https://i.imgur.com/zjt8qD3.png',
            location: {
                center: [120.30439, 22.70021],
                zoom: 15.52,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Second case: Taichung City',
            image: 'https://i.imgur.com/B61XmRv.png',
            location: {
                center: [120.61051, 24.21115],
                zoom: 15.76,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Thrid case: Taoyuan City',
            image: 'https://i.imgur.com/FPnfMaX.png',
            location: {
                center: [121.18237, 24.88883],
                zoom: 15.23,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }





    ]
};
