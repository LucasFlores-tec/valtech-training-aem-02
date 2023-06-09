package com.aem.training.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.aem.training.core.models.CustomCarouselModel;
import com.aem.training.core.models.ImageModel;
import lombok.Getter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = { CustomCarouselModel.class, ComponentExporter.class },
        resourceType = CustomCarouselModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
@Getter
public class CustomCarouselModelImpl implements CustomCarouselModel {

    static final String RESOURCE_TYPE = "aem-training/components/custom-carousel";

    @ValueMapValue
    private String title;

    @ChildResource
    private List<ImageModel> assets;

    @Override
    public String getExportedType() {
        return CustomCarouselModelImpl.RESOURCE_TYPE;
    }

}
