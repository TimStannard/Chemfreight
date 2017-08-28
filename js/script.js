// read more popup
var ContactClicked = false;

$( document ).ready(function() {
   
// our services popups

  $( ".os-hazardous" ).mouseenter(function(event) {
    $("#os-harz-popup").css('opacity', '1');

  });
    $( ".os-hazardous" ).mouseleave(function(event) {
    $("#os-harz-popup").css('opacity', '0');

  });

    $( ".os-rmp" ).mouseenter(function(event) {
    $("#os-rmp-popup").css('opacity', '1');

  });
    $( ".os-rmp" ).mouseleave(function(event) {
    $("#os-rmp-popup").css('opacity', '0');

  });
    $( ".os-importing" ).mouseenter(function(event) {
    $("#os-importing-popup").css('opacity', '1');

  });
    $( ".os-importing" ).mouseleave(function(event) {
    $("#os-importing-popup").css('opacity', '0');

  });

    $( ".os-transport" ).mouseenter(function(event) {
    $("#os-transport-popup").css('opacity', '1');

  });
    $( ".os-transport" ).mouseleave(function(event) {
    $("#os-transport-popup").css('opacity', '0');

  });

    $( ".os-blending" ).mouseenter(function(event) {
    $("#os-blending-popup").css('opacity', '1');

  });
    $( ".os-blending" ).mouseleave(function(event) {
    $("#os-blending-popup").css('opacity', '0');

  });
    $( ".os-waste" ).mouseenter(function(event) {
    $("#os-waste-popup").css('opacity', '1');

  });
    $( ".os-waste" ).mouseleave(function(event) {
    $("#os-waste-popup").css('opacity', '0');

  });

// our locations popups
    $( ".ol-echelon-place" ).mouseenter(function(event) {
    $("#ol-echelon-place-popup").css('opacity', '1');

  });
    $( ".ol-echelon-place" ).mouseleave(function(event) {
    $("#ol-echelon-place-popup").css('opacity', '0');

  });
    $( ".ol-edmonton" ).mouseenter(function(event) {
    $("#ol-edmonton-popup").css('opacity', '1');

  });
    $( ".ol-edmonton" ).mouseleave(function(event) {
    $("#ol-edmonton-popup").css('opacity', '0');

  });
    $( ".ol-stonedon" ).mouseenter(function(event) {
    $("#ol-stonedon-popup").css('opacity', '1');

  });    
    $( ".ol-stonedon" ).mouseleave(function(event) {
    $("#ol-stonedon-popup").css('opacity', '0');

  });
    $( ".ol-bostock" ).mouseenter(function(event) {
    $("#ol-bostock-popup").css('opacity', '1');

  });    
    $( ".ol-bostock" ).mouseleave(function(event) {
    $("#ol-bostock-popup").css('opacity', '0');

  });
});

var locationInfo = [
    {  dataAtr: "echelonPlace",
        name: "Echelon Place",
        desc: "This facility houses our dedicated RMP Food store and Head Office.",
        image: "img/ol-echelon-place.jpg",
        text:
        "<ul class='fa-ul'>"+
        " <li><i class='fa-li fa fa-check'></i>RMP Registered for dairy and animal products</li>"+
        " <li><i class='fa-li fa fa-check'></i>HACCP Certified risk management plan and MPI approved transitional facility</li>"+
        " <li><i class='fa-li fa fa-check'></i>Elevated off floor racking and full LED lighting with sealed floors Food</li>" +
        " <li><i class='fa-li fa fa-check'></i>Pest control programmes that meet all MPI requirements</li>"+
        " <li><i class='fa-li fa fa-check'></i>Secure all weather canopied loading and protected container devanning area</li>"+
        " <li><i class='fa-li fa fa-check'></i>24/7 Security camera monitoring</li>" +
        " <li><i class='fa-li fa fa-check'></i>Premises are alarmed, monitored, with sealed yards and are fully security fenced</li>"+
        " <li><i class='fa-li fa fa-check'></i>Refrigerated container storage available</li>"+
        "</ul>",
        location: 
        "<ul class='fa-ul location-ul'>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Physical Address:</span> 15 Echelon Place, East Tamaki, Auckland </li>" + 
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i> <span class='loc-title'>Hours of Operation:</span>  Monday to Friday 7:00am to 5:30pm</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Site Manager:</span> Nigel Hitch</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Email:</span><a href='mailto:Nigel.Hitch@chemfreight.co.nz'> Nigel.Hitch@chemfreight.co.nz</a></li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Telephone:</span> (09) 280 0735</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Facsimile:</span> (09) 274 7250</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Mail address:</span> P.O. Box 58045, Botany 2163</li>"+
        "</ul>"
    },
    {  dataAtr: "edmontonRoad",
        name: "Edmonton Road",
        image: "img/ol-edmonton.jpg",
        desc: "Our large Christchurch operation that services the South Island.",
        text:
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i>Bespoke designed and built HSNO compliant storage</li>"+
        "<li><i class='fa-li fa fa-check'></i>MPI approved transitional facility</li>"+
        "<li><i class='fa-li fa fa-check'></i>Hazardous and Non Hazardous storage across three warehouses</li>"+
        "<li><i class='fa-li fa fa-check'></i>Dedicated chemical storage bunkers</li>"+
        "<li><i class='fa-li fa fa-check'></i>Secure all weather canopied loading and protected container devanning area</li>"+
        "<li><i class='fa-li fa fa-check'></i>24/7 Security camera monitoring</li>"+
        "<li><i class='fa-li fa fa-check'></i>Premises are alarmed, monitored, with sealed yards and are fully security fenced</li>"+
        "</ul>",
        location: 
        "<ul class='fa-ul location-ul'>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Physical Address:</span> 38 Edmonton Road, Hornby, Christchurch </li>" + 
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i> <span class='loc-title'>Hours of Operation:</span>  Monday to Friday 7:00am to 5:30pm</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Site Manager:</span> Jono Franssen</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Email:</span><a href='mailto:jono.franssen@chemfreight.co.nz'> jono.franssen@chemfreight.co.nz</a></li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Telephone:</span> (03) 344 0135</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Facsimile:</span> (03) 344 0136</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Mail address:</span> P.O. Box 16987, Hornby 8441</li>"+
        "</ul>"
    },
    {  dataAtr: "stonedonDrive",
        name: "Stonedon Drive",
        desc: "Our largest specialised site in Auckland with multiple Hazardous storage facilities.",
        image: "img/ol-stonedon.jpg",
        text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i>Bespoke designed and built HSNO compliant storage</li>"+
        "<li><i class='fa-li fa fa-check'></i>MPI approved transitional facility</li>"+
        "<li><i class='fa-li fa fa-check'></i>Hazardous and Non Hazardous storage four warehouses</li>"+
        "<li><i class='fa-li fa fa-check'></i>Dedicated chemical storage bunkers</li>"+
        "<li><i class='fa-li fa fa-check'></i>Chemblend manufacturing plan and QC Laboratory</li>"+
        "<li><i class='fa-li fa fa-check'></i>24/7 Security camera monitoring</li>" +
        "<li><i class='fa-li fa fa-check'></i>Premises are alarmed, monitored, with sealed yards and are fully security fenced</li>" +
        "</ul>",
        location: 
        "<ul class='fa-ul location-ul'>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Physical Address:</span> 10c Stonedon Drive, East Tamaki, Auckland </li>" + 
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i> <span class='loc-title'>Hours of Operation:</span>  Monday to Friday 7:00am to 5:30pm</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Site Manager:</span> Nigel Hitch</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Email:</span><a href='mailto:Nigel.Hitch@chemfreight.co.nz'> Nigel.Hitch@chemfreight.co.nz</a></li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Telephone:</span> (09) 280 0735</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Facsimile:</span> (09) 274 7250</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Mail address:</span> P.O. Box 58045, Botany 2163</li>"+
        "</ul>"
    },
    {  dataAtr: "bostockPlace",
        name: "Bostock Place",
        desc: "The home of our Chemblend division and also our newest Hazardous storage facilities.",
        image: "img/ol-bostock.jpg",
        text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i>Bespoke designed and built HSNO compliant storage</li>"+
        " <li><i class='fa-li fa fa-check'></i>MPI approved transitional facility</li>"+
        " <li><i class='fa-li fa fa-check'></i>Hazardous and Non Hazardous storage four warehouses</li>"+
        " <li><i class='fa-li fa fa-check'></i>Dedicated chemical storage bunkers</li>"+
        " <li><i class='fa-li fa fa-check'></i>Chemblend manufacturing plan and QC Laboratory</li>"+
        " <li><i class='fa-li fa fa-check'></i>24/7 Security camera monitoring</li>" +
        " <li><i class='fa-li fa fa-check'></i>Premises are alarmed, monitored, with sealed yards and are fully security fenced</li>"+
        "</ul>",
        location: 
        "<ul class='fa-ul location-ul'>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Physical Address:</span> 4 Bostock Place, East Tamaki </li>" + 
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i> <span class='loc-title'>Hours of Operation:</span> Monday to Friday 7:00am to 5:30pm</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Site Manager:</span>  Brendon Toomer</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Email:</span><a href='mailto:Brendon.Toomer@chemfreight.co.nz'> Brendon.Toomer@chemfreight.co.nz</a></li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Telephone:</span> (09) 274 1312</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Facsimile:</span> (09) 274 1315</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Mail address:</span> P.O. Box 58045, Botany 2163</li>"+
        "</ul>"
    },
   {  dataAtr: "chemBlend",
        name: "Chemblend - Bostock Place",
        desc: "Bostock Place",
        image: "img/ol-bostock.jpg",
        text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i>Bespoke designed and built HSNO compliant storage</li>"+
        " <li><i class='fa-li fa fa-check'></i>MPI approved transitional facility</li>"+
        " <li><i class='fa-li fa fa-check'></i>Hazardous and Non Hazardous storage four warehouses</li>"+
        " <li><i class='fa-li fa fa-check'></i>Dedicated chemical storage bunkers</li>"+
        " <li><i class='fa-li fa fa-check'></i>Chemblend manufacturing plan and QC Laboratory</li>"+
        " <li><i class='fa-li fa fa-check'></i>24/7 Security camera monitoring</li>" +
        " <li><i class='fa-li fa fa-check'></i>Premises are alarmed, monitored, with sealed yards and are fully security fenced</li>"+
        "</ul>",
        location: 
        "<ul class='fa-ul location-ul'>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Physical Address:</span> 4 Bostock Place, East Tamaki </li>" + 
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i> <span class='loc-title'>Hours of Operation:</span> Monday to Friday 7:00am to 5:00pm</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Administration Manager:</span>  Trudi Sullivan</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Email:</span><a href='mailto:Trudi.Sullivan@chemfreight.co.nz'> Trudi.Sullivan@chemfreight.co.nz</a></li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Telephone:</span> (09) 274 1302</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Facsimile:</span> (09) 274 1315</li>"+
        "<li><i class='fa-li fa fa-angle-right contact-li-icon'></i><span class='loc-title'>Mail address:</span> P.O. Box 58045, Botany 2163</li>"+
        "</ul>"
    },
    {  dataAtr: "headOffice",
        name: "Echelon Head Office",
        desc: "",
        image: "img/ol-bostock.jpg",
        text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i>Bespoke designed and built HSNO compliant storage</li>"+
        " <li><i class='fa-li fa fa-check'></i>MPI approved transitional facility</li>"+
        " <li><i class='fa-li fa fa-check'></i>Hazardous and Non Hazardous storage four warehouses</li>"+
        " <li><i class='fa-li fa fa-check'></i>Dedicated chemical storage bunkers</li>"+
        " <li><i class='fa-li fa fa-check'></i>Chemblend manufacturing plan and QC Laboratory</li>"+
        " <li><i class='fa-li fa fa-check'></i>24/7 Security camera monitoring</li>" +
        " <li><i class='fa-li fa fa-check'></i>Premises are alarmed, monitored, with sealed yards and are fully security fenced</li>"+
        "</ul>",
        location: 
        "<ul class='fa-ul location-ul'>"+
        "<li><i class='fa-li fa fa-phone contact-li-icon'></i><span class='loc-title'>Telephone:</span> (09) 274 5341</li>"+
        "<li><i class='fa-li fa fa-fax contact-li-icon'></i><span class='loc-title'>Facsimile:</span> (09) 274 7250</li>"+
        "</ul>"
    }
];

var servicesInfo = [
    {   
        dataAtr: "specialisedStorage",
        name: "Specialised Hazardous And Non-Hazardous Storage",
        desc: "We operate 11 dedicated stores across four locations within the key industrial areas in both Auckland and Christchurch.",
        // image: "images/wellington-waterfront-mac.png",
        text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i> We have designed and built our own HSNO compliant storage facilities </li>"+
        "<li><i class='fa-li fa fa-check'></i>  Racked and fully bunded chemical stores</li>"+
        "<li><i class='fa-li fa fa-check'></i>  We can store all HSNO classes from 1-9</li>"+
        "<li><i class='fa-li fa fa-check'></i>  18 Specialised Chemical storages Bunkers</li>"+
        "<li><i class='fa-li fa fa-check'></i>  24/7 Security camera monitoring and securely gated and alarmed</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Location controlled stock system ensuring compliant HSNO segregation</li>"+
        "<li><i class='fa-li fa fa-check'></i>  MPI Approved Transitional Facility</li>"+
       "<li><i class='fa-li fa fa-check'></i>  We operate the latest European material handling equipment</li>"+
        "<li><i class='fa-li fa fa-check'></i> Highly trained staff with Approved Handler qualifications</li>" +
        "</ul>"

    },
    {   
        dataAtr: "rmpStorage",
        name: "RMP FOOD GRADE STORAGE",
        desc: "Our latest facility is our dedicated Food storage site and this located separately from our Hazardous operations.",
        // image: "images/wellington-waterfront-mac.png",
        text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i> RMP Registered for dairy products and others with regular internal and external audits </li>"+
        "<li><i class='fa-li fa fa-check'></i>  HACCP Certified verified by external specialists</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Elevated racking and full LED lighting with sealed floors</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Stringent housekeeping and sanitation processes</li>"+
        "<li><i class='fa-li fa fa-check'></i>  24/7 Security camera monitoring and securely gated and alarmed</li>"+
        "<li><i class='fa-li fa fa-check'></i>  We operate the latest European material handling equipment</li>"+
        "<li><i class='fa-li fa fa-check'></i>  MPI Approved Transitional Facility</li>"+
        "</ul>"

    },
    {
        dataAtr: "impExp",
        name: "IMPORTING AND EXPORTING",
        desc: "We provide a full import and export service for all chemical and food products.",
        // image: "images/wellington-waterfront-mac.png",
        text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i> Import and export documentation preparation </li>"+
        "<li><i class='fa-li fa fa-check'></i>  Shipping and Air freight for everything you need</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Customs clearance</li>"+
        "<li><i class='fa-li fa fa-check'></i>  We provide IATA, HSNO and NZTA documentation</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Specialised wharf and terminal freight service </li>"+
        "</ul>"
    },
    {
        dataAtr: "localLinehaul",
        name: "LOCAL AND LINEHAUL DISTRIBUTION",
        desc: "We provide an effective nationwide distribution service to ensure your product gets where it needs to go.",
        // image: "images/tnz-traverse-iphone.png",
         text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i> We own and operate our own fleet of heavy vehicles in Auckland and Christchurch  </li>"+
        "<li><i class='fa-li fa fa-check'></i>  Specialised trucks with Dangerous Goods capabilities and certification</li>"+
        "<li><i class='fa-li fa fa-check'></i>  GPS monitoring and tracking</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Full on-board chemical pump over capabilities for Hazardous and non-Hazardous chemicals</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Same day and overnight services</li>"+
        "</ul>"
    },
     {
        dataAtr: "localLinehaul",
        name: "LOCAL AND LINEHAUL DISTRIBUTION",
        desc: "We provide an effective nationwide distribution service to ensure your product gets where it needs to go.",
        // image: "images/tnz-traverse-iphone.png",
         text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i> We own and operate our own fleet of heavy vehicles in Auckland and Christchurch  </li>"+
        "<li><i class='fa-li fa fa-check'></i>  Specialised trucks with Dangerous Goods capabilities and certification</li>"+
        "<li><i class='fa-li fa fa-check'></i>  GPS monitoring and tracking</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Full on-board chemical pump over capabilities for Hazardous and non-Hazardous chemicals</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Same day and overnight services</li>"+
        "</ul>"
    },
     {
        dataAtr: "chemBlending",
        name: "CHEMICAL BLENDING AND REPACKAGING",
        desc: "Chemblend is our Auckland based chemical blending and repackaging division and has been providing these services for 20 years",
        // image: "images/tnz-traverse-iphone.png",
         text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i>Hazardous and non-Hazardous product repacking and relabeling  </li>"+
        "<li><i class='fa-li fa fa-check'></i>  Toll blending and contract manufacture</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Batch size from 100L to 5,000L</li>"+
        "<li><i class='fa-li fa fa-check'></i>  GMP Quality system and ISO9001:2015 processes</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Two dedicated plants with seven blending tanks</li>"+
        "<li><i class='fa-li fa fa-check'></i>  On-site laboratory for quality control testing</li>"+
        "</ul>"
    },
     {
        dataAtr: "chemDisposal",
        name: "CHEMICAL DISPOSAL",
        desc: "Our team of specialists can arrange collection and disposal of a wide range of expired and waste products and substances.",
        // image: "images/tnz-traverse-iphone.png",
         text: 
        "<ul class='fa-ul'>"+
        "<li><i class='fa-li fa fa-check'></i> DG documentation preparation for collection  </li>"+
        "<li><i class='fa-li fa fa-check'></i>  Container repacking and storage of all waste and chemical products</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Testing and quotation service</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Fully compliant and environmentally responsible disposal or destruction</li>"+
        "<li><i class='fa-li fa fa-check'></i>  Disposal certification </li>"+
        "</ul>"
    }
];

var selectedDiv;

$(".ol-item-hotspot").click(function(){
        var selection = $(this).data('modal');
        selectedDiv = selection;
     RemoveHover();
        for (var i = 0; i < locationInfo.length; i++) {
            if(selection === locationInfo[i].dataAtr){
              // console.log(locationInfo[i].text);

              $('#modal-header').html(locationInfo[i].name);
              $('#modal-description').html(locationInfo[i].desc);
              $('#modal-bullet-points').html(locationInfo[i].text);
              $('#modal-location-details').html(locationInfo[i].location);
              modalOpen(); 
            }
        }

        // modal.fadeIn("fast");
    });

// close modal
$("#flex-container").click(function(e){
      if ($(e.target).is('#flex-container')) {
    modalClose();
         RestartHovering();  
    }

  });
$("#close-btn-modal").click(function(){
    modalClose();
         RestartHovering();  

  });
function modalClose(){

    $('#modal').css('opacity','0');
    $('#flex-container').css('opacity','0'); 
    $('.cu-contact-details').html("<i class='fa fa-phone' aria-hidden='true'></i><i class='fa fa-envelope-o' aria-hidden='true'></i> Contact details");
    ContactClicked = false;
    $('.cu-contact-details').css('display','block');
    $('#close-btn-modal').removeClass('margin-fix-doubleline');
    setTimeout(function(){
        $('#flex-container').css('width','0%');
        $('#flex-container').css('height','0%'); 
        }, 300);
        
    };

function modalOpen (){
     $('#flex-container').css('width','100%');
  $('#flex-container').css('height','100%');
  $('#flex-container').css('opacity','1');
  $('#modal').css('opacity','1');
}

function RemoveHover(){
  $('.os-item-img').addClass('hidden');
  $('.os-popup').css('opacity','0');
}
function RestartHovering(){
  $('.os-item-img').removeClass('hidden');
}


$(".cu-contact-details").click(function(){
    if (ContactClicked == false) {
       for (var i = 0; i < locationInfo.length; i++) {
            if(selectedDiv === locationInfo[i].dataAtr){
            $('#modal-bullet-points').addClass('contact-enabled');
             $('#modal-description').html("Contact details:");
             $('.cu-contact-details').html("Go back");
            $('#modal-bullet-points').html(locationInfo[i].location);
            ContactClicked = true;
            }
    }
  }else {
    for (var i = 0; i < locationInfo.length; i++) {
            if(selectedDiv === locationInfo[i].dataAtr){
            $('#modal-bullet-points').removeClass('contact-enabled');
             $('#modal-description').html(locationInfo[i].desc);
            $('#modal-bullet-points').html(locationInfo[i].text);
      $('.cu-contact-details').html("<i class='fa fa-phone' aria-hidden='true'></i><i class='fa fa-envelope-o' aria-hidden='true'></i> Contact details");
            ContactClicked = false;
            }
    }
  
  }
  
});


$(".ol-direct-contact").click(function(){
        var selection = $(this).data('modal');
        for (var i = 0; i < locationInfo.length; i++) {
            if(selection === locationInfo[i].dataAtr){
              $('#modal-header').html(locationInfo[i].name);
              $('#modal-description').html("Contact details:");
              $('#modal-bullet-points').html(locationInfo[i].location);
              $('.cu-contact-details').css('display','none');
              modalOpen(); 
            }
        }

    });

$(".os-item-hotspot").click(function(){
        var selection = $(this).data('modal');
         RemoveHover();
        for (var i = 0; i < servicesInfo.length; i++) {
            if(selection == servicesInfo[i].dataAtr){
              $('#modal-header').html(servicesInfo[i].name);
              $('#modal-description').html(servicesInfo[i].desc);
              $('#modal-bullet-points').html(servicesInfo[i].text);
              $('#modal-location-details').html(servicesInfo[i].location);
              // give close button extra margin
              if(selection == "specialisedStorage") {
                   $('#close-btn-modal').addClass('margin-fix-doubleline');
              }
              modalOpen(); 
            }
        }
    });

if ($("body").hasClass("swiper-required")) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        coverflow: {
            rotate: 0,
            stretch: 5,
            depth: 300,
            modifier: 1,
            slideShadows : false
        }

    });
}


$(".swiper-slide").click(function(){
    $(".swiper-slide").removeClass("active");
    $(this).addClass("active");
    swiper.slideTo( $(this).index(),300,false );

});

// sidebar

$( "#sidebar" ).simplerSidebar( {
    align: "right", // sidebar.align
    selectors: {
        trigger: ".menu-open",
        quitter: ".close-sidebar"
    },
    animation: {
        easing: "easeOutQuint"
    },
    sidebar: {
        width: 300
    },
    mask: {
        display: true,
        css: {
            backgroundColor: "white",
            opacity: 0.3,
            filter: "Alpha(opacity=30)"
        }
    },
 events: {
        callbacks: {
            animation: {
                freezePage: true
            }
        }
    }
});

var windowsize = $(window).width();

$(window).resize(function() {
  windowsize = $(window).width();
  if ($('#sidebar').data('simplersidebar') == 'opened') {
   //    if ($('#sidebar').css('right') < 0){
   //    //   $( ".close-sidebar" ).trigger( "click" );
    console.log("test");
   // }
  }
});

// css( "box-shadow", "-3px 0px 7px 2px rgba(0, 0, 0, 0.17)");

// scroll to top
  $("a[href='#top']").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });

