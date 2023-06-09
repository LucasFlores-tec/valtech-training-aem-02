package com.aem.training.core.models.impl;

import com.aem.training.core.models.ImageModel;
import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = Resource.class,
        adapters = ImageModel.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Getter
public class ImageModelImpl implements ImageModel {

    @ValueMapValue
    private String fileReference;

    @ValueMapValue
    private String linkURL;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String display;

    @Override
    public boolean getDisplay() {
        return display == "true" ? true : false;
    }

}
