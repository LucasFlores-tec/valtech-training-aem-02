package com.aem.training.core.models;

import com.adobe.cq.export.json.ComponentExporter;

import java.util.List;

public interface CustomCarouselModel extends ComponentExporter {

    String getTitle();

    List<ImageModel> getAssets();

}
