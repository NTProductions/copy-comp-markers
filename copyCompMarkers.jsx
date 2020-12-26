function copyCompMarkers(fromComp, toComp) {
    app.beginUndoGroup("Copy Comp Markers");
    var marker;
    for(var i = 1; i <= fromComp.markerProperty.numKeys; i++) {
        marker = new MarkerValue(fromComp.markerProperty.keyValue(i).comment);
        marker.chapter = fromComp.markerProperty.keyValue(i).chapter;
        marker.comment = fromComp.markerProperty.keyValue(i).comment;
        marker.cuePointName = fromComp.markerProperty.keyValue(i).cuePointName;
        marker.duration = fromComp.markerProperty.keyValue(i).duration;
        marker.eventCuePoint = fromComp.markerProperty.keyValue(i).eventCuePoint;
        marker.frameTarget = fromComp.markerProperty.keyValue(i).frameTarget;
        marker.url = fromComp.markerProperty.keyValue(i).url;
        marker.label = fromComp.markerProperty.keyValue(i).label;
        marker.protectedRegion = fromComp.markerProperty.keyValue(i).protectedRegion;
        toComp.markerProperty.setValueAtTime(fromComp.markerProperty.keyTime(i), marker);
        }
    app.endUndoGroup();
    }