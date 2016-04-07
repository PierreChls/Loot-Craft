/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im = "lib/edge/images/";

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'false',

    'gVideoPreloadPreference': 'false'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'chaise',
                type: 'image',
                rect: ['-235px', '-435px','1020px','1270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"chaise.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'armoire',
                type: 'image',
                rect: ['-370px', '-446px','1290px','1290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"armoire.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'lampe',
                type: 'image',
                rect: ['-196px', '-385px','970px','1170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lampe.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'fauteuil2',
                type: 'image',
                rect: ['-370px', '-445px','1290px','1290px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"fauteuil2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_lampe}": [
                ["style", "top", '-385px'],
                ["style", "opacity", '0'],
                ["style", "left", '113px']
            ],
            "${_fauteuil2}": [
                ["style", "top", '-445px'],
                ["style", "opacity", '0'],
                ["style", "left", '-27px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "max-width", '550px'],
                ["style", "width", '550px']
            ],
            "${_chaise}": [
                ["style", "top", '-435px'],
                ["style", "opacity", '0'],
                ["style", "left", '92px']
            ],
            "${_armoire}": [
                ["style", "top", '-446px'],
                ["style", "opacity", '0'],
                ["style", "left", '-28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5995,
            autoPlay: true,
            timeline: [
                { id: "eid93", tween: [ "style", "${_fauteuil2}", "top", '-445px', { fromValue: '-445px'}], position: 5585, duration: 0, easing: "swing" },
                { id: "eid54", tween: [ "style", "${_chaise}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750, easing: "swing" },
                { id: "eid60", tween: [ "style", "${_chaise}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 410, easing: "swing" },
                { id: "eid88", tween: [ "style", "${_fauteuil2}", "left", '-464px', { fromValue: '-27px'}], position: 4585, duration: 410, easing: "swing" },
                { id: "eid90", tween: [ "style", "${_fauteuil2}", "left", '-370px', { fromValue: '-464px'}], position: 4995, duration: 340, easing: "swing" },
                { id: "eid94", tween: [ "style", "${_fauteuil2}", "left", '-711px', { fromValue: '-370px'}], position: 5585, duration: 410, easing: "swing" },
                { id: "eid51", tween: [ "style", "${_chaise}", "left", '-298px', { fromValue: '92px'}], position: 1000, duration: 410, easing: "swing" },
                { id: "eid50", tween: [ "style", "${_chaise}", "left", '-235px', { fromValue: '-298px'}], position: 1410, duration: 340, easing: "swing" },
                { id: "eid57", tween: [ "style", "${_chaise}", "left", '-565px', { fromValue: '-235px'}], position: 2000, duration: 410, easing: "swing" },
                { id: "eid62", tween: [ "style", "${_armoire}", "top", '-446px', { fromValue: '-446px'}], position: 2945, duration: 0, easing: "swing" },
                { id: "eid68", tween: [ "style", "${_armoire}", "top", '-446px', { fromValue: '-446px'}], position: 3195, duration: 0, easing: "swing" },
                { id: "eid71", tween: [ "style", "${_armoire}", "top", '-446px', { fromValue: '-446px'}], position: 3605, duration: 0, easing: "swing" },
                { id: "eid76", tween: [ "style", "${_lampe}", "top", '-385px', { fromValue: '-385px'}], position: 4140, duration: 0, easing: "swing" },
                { id: "eid82", tween: [ "style", "${_lampe}", "top", '-385px', { fromValue: '-385px'}], position: 4390, duration: 0, easing: "swing" },
                { id: "eid79", tween: [ "style", "${_lampe}", "left", '-295px', { fromValue: '113px'}], position: 3390, duration: 410, easing: "swing" },
                { id: "eid78", tween: [ "style", "${_lampe}", "left", '-196px', { fromValue: '-295px'}], position: 3800, duration: 340, easing: "swing" },
                { id: "eid85", tween: [ "style", "${_lampe}", "left", '-536px', { fromValue: '-196px'}], position: 4390, duration: 410, easing: "swing" },
                { id: "eid80", tween: [ "style", "${_lampe}", "opacity", '1', { fromValue: '0'}], position: 3390, duration: 750, easing: "swing" },
                { id: "eid84", tween: [ "style", "${_lampe}", "opacity", '0', { fromValue: '1'}], position: 4390, duration: 410, easing: "swing" },
                { id: "eid89", tween: [ "style", "${_fauteuil2}", "opacity", '1', { fromValue: '0'}], position: 4585, duration: 750, easing: "swing" },
                { id: "eid95", tween: [ "style", "${_fauteuil2}", "opacity", '0', { fromValue: '1'}], position: 5585, duration: 410, easing: "swing" },
                { id: "eid66", tween: [ "style", "${_armoire}", "opacity", '1', { fromValue: '0'}], position: 2195, duration: 750, easing: "swing" },
                { id: "eid74", tween: [ "style", "${_armoire}", "opacity", '0', { fromValue: '1'}], position: 3195, duration: 410, easing: "swing" },
                { id: "eid64", tween: [ "style", "${_armoire}", "left", '-441px', { fromValue: '-28px'}], position: 2195, duration: 410, easing: "swing" },
                { id: "eid63", tween: [ "style", "${_armoire}", "left", '-370px', { fromValue: '-441px'}], position: 2605, duration: 340, easing: "swing" },
                { id: "eid73", tween: [ "style", "${_armoire}", "left", '-710px', { fromValue: '-370px'}], position: 3195, duration: 410, easing: "swing" },
                { id: "eid49", tween: [ "style", "${_chaise}", "top", '-435px', { fromValue: '-435px'}], position: 1750, duration: 0, easing: "swing" },
                { id: "eid56", tween: [ "style", "${_chaise}", "top", '-435px', { fromValue: '-435px'}], position: 2000, duration: 0, easing: "swing" }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'leaf-icon-83793',
                    type: 'image',
                    rect: ['0px', '0px', '299px', '299px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/leaf-icon-83793.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'bulb2',
                    rect: ['6px', '125px', '240px', '240px', 'auto', 'auto'],
                    transform: [[0, 0], ['180']],
                    fill: ['rgba(0,0,0,0)', 'images/bulb2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_leaf-icon-83793}": [
                ["style", "height", '299px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '299px']
            ],
            "${_bulb2}": [
                ["style", "top", '125px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '365px'],
                ["style", "width", '299px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-38547048");
