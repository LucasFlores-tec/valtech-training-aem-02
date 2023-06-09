package com.aem.training.core.models;

import com.adobe.cq.export.json.ComponentExporter;

import java.util.List;

/**
 * The sling model interface used to expose the Custom Carousel component's values.
 * Implemented by CustomCarouselModelImpl.
 */
public interface CustomCarouselModel extends ComponentExporter {

    String getTitle();

    List<ImageModel> getAssets();

}
